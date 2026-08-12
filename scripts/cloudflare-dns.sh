#!/usr/bin/env bash
#
# Build the Cloudflare DNS zone for paulmartynconstruction.com.
#
# Creates (or updates in place) every record needed to serve the site from
# Railway while keeping Google Workspace email working. Safe to re-run: each
# record is matched on type+name and updated rather than duplicated.
#
# Dry run by default — it prints what it would do and changes nothing.
# Pass --apply to actually write.
#
#   export CF_API_TOKEN=...        # needs Zone:Read + DNS:Edit on this zone
#   ./scripts/cloudflare-dns.sh            # show the plan
#   ./scripts/cloudflare-dns.sh --apply    # write it
#
# The zone must already exist in Cloudflare (Add a site) — this script does not
# create it, so that adding the domain stays a deliberate human step.
#
# It deliberately does NOT change nameservers. That is the irreversible part and
# belongs in the registrar panel, after these records are verified.
#
# See docs/CUTOVER.md for the surrounding procedure.

set -euo pipefail

ZONE="paulmartynconstruction.com"
API="https://api.cloudflare.com/client/v4"
APPLY=false
[[ "${1:-}" == "--apply" ]] && APPLY=true

if [[ -z "${CF_API_TOKEN:-}" ]]; then
  echo "CF_API_TOKEN is not set." >&2
  echo "Create one at Cloudflare → My Profile → API Tokens, with" >&2
  echo "Zone:Read and DNS:Edit on ${ZONE}." >&2
  exit 1
fi

cf() {
  curl -sS --max-time 30 -H "Authorization: Bearer ${CF_API_TOKEN}" \
    -H "Content-Type: application/json" "$@"
}

# jq is not assumed to be installed; python3 is on every macOS.
pyget() { python3 -c "import json,sys;d=json.load(sys.stdin);$1"; }

echo "→ Looking up zone ${ZONE}"
ZONE_JSON=$(cf "${API}/zones?name=${ZONE}")

if ! printf '%s' "$ZONE_JSON" | pyget "sys.exit(0 if d.get('success') else 1)"; then
  echo "Cloudflare rejected the request:" >&2
  printf '%s' "$ZONE_JSON" | pyget "print(*[e.get('message') for e in d.get('errors',[])],sep=chr(10))" >&2
  exit 1
fi

ZONE_ID=$(printf '%s' "$ZONE_JSON" | pyget "r=d.get('result') or [];print(r[0]['id'] if r else '')")

if [[ -z "$ZONE_ID" ]]; then
  echo "Zone ${ZONE} is not in this Cloudflare account yet." >&2
  echo "Add it first: Cloudflare → Add a site → ${ZONE}. Then re-run." >&2
  exit 1
fi
echo "  zone id ${ZONE_ID}"

# type | name | content | priority ("-" for none) | proxied
#
# Proxying is off everywhere to start with. It keeps Railway's own certificate
# in play so there is no TLS ambiguity on cutover day; turn it on afterwards as
# a separate, revertible change (and set SSL/TLS to Full (strict) if you do).
RECORDS=(
  "CNAME|@|z5qgknmh.up.railway.app|-|false"
  "TXT|_railway-verify|railway-verify=842e7bf59c082837e316897d69af8db9d493c5b6bdd45f63d9f58748970039f5|-|false"
  "CNAME|www|1hl2mdge.up.railway.app|-|false"
  "TXT|_railway-verify.www|railway-verify=4b723d819aabb5527fb3f338a39f5301d723ea7aca19ef3c62deef05cd18133b|-|false"
  # Google Workspace. Losing these takes email down; they are not optional.
  "MX|@|aspmx.l.google.com|1|false"
  "MX|@|alt1.aspmx.l.google.com|5|false"
  "MX|@|alt2.aspmx.l.google.com|5|false"
  "MX|@|alt3.aspmx.l.google.com|10|false"
  "MX|@|alt4.aspmx.l.google.com|10|false"
  "TXT|@|v=spf1 include:_spf.google.com ~all|-|false"
)

if ! $APPLY; then
  echo
  echo "DRY RUN — nothing will be written. Re-run with --apply."
  echo
fi

for rec in "${RECORDS[@]}"; do
  IFS='|' read -r TYPE NAME CONTENT PRIO PROXIED <<<"$rec"

  FQDN="$ZONE"
  [[ "$NAME" != "@" ]] && FQDN="${NAME}.${ZONE}"

  # Match on type+name. MX and TXT legitimately have several records per name,
  # so those also match on content to avoid collapsing the set into one.
  QUERY="${API}/zones/${ZONE_ID}/dns_records?type=${TYPE}&name=${FQDN}"
  if [[ "$TYPE" == "MX" || "$TYPE" == "TXT" ]]; then
    QUERY="${QUERY}&content=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$CONTENT")"
  fi

  EXISTING_ID=$(cf "$QUERY" | pyget "r=d.get('result') or [];print(r[0]['id'] if r else '')")

  BODY=$(python3 -c "
import json,sys
t,n,c,p,x=sys.argv[1:6]
b={'type':t,'name':n,'content':c,'ttl':1}
if t in ('CNAME','A'): b['proxied']= x=='true'
if p!='-': b['priority']=int(p)
print(json.dumps(b))
" "$TYPE" "$FQDN" "$CONTENT" "$PRIO" "$PROXIED")

  SHORT="${CONTENT:0:52}"; [[ ${#CONTENT} -gt 52 ]] && SHORT="${SHORT}…"

  if [[ -n "$EXISTING_ID" ]]; then
    ACTION="update"; METHOD="PUT"; URL="${API}/zones/${ZONE_ID}/dns_records/${EXISTING_ID}"
  else
    ACTION="create"; METHOD="POST"; URL="${API}/zones/${ZONE_ID}/dns_records"
  fi

  printf "  %-6s %-5s %-22s %s\n" "$ACTION" "$TYPE" "$NAME" "$SHORT"

  $APPLY || continue

  RESP=$(cf -X "$METHOD" "$URL" -d "$BODY")
  if ! printf '%s' "$RESP" | pyget "sys.exit(0 if d.get('success') else 1)"; then
    echo "    FAILED:" >&2
    printf '%s' "$RESP" | pyget "print(*['    '+str(e.get('message')) for e in d.get('errors',[])],sep=chr(10))" >&2
    exit 1
  fi
done

echo
if $APPLY; then
  echo "Records written. Nameservers have NOT been changed — that is still yours to do."
  echo
  echo "Next:"
  echo "  1. Re-read the five MX rows in the Cloudflare dashboard against docs/CUTOVER.md."
  echo "  2. Change nameservers at the registrar (Squarespace domains panel)."
  echo "  3. Verify, including a test email to Paul@${ZONE} from an outside address."
else
  echo "Re-run with --apply to write these."
fi
