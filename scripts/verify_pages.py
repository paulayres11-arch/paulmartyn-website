"""Pre-deploy checks for content pages.

For each path: one <h1>, <title> length, meta description length, canonical,
every JSON-LD block parses, FAQPage text appears verbatim on the page, no
placeholder markers in the HTML, and every internal link returns 200/308.
Usage: python3 scripts/verify_pages.py BASE_URL PATH [PATH ...]
"""
import html as H, json, re, subprocess, sys

base = sys.argv[1]
def get(url):
    return subprocess.run(["curl", "-s", url], capture_output=True, text=True).stdout
def status(url):
    return subprocess.run(["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}", url], capture_output=True, text=True).stdout

seen = {}
problems = 0
for path in sys.argv[2:]:
    page = get(base + path)
    notes = []
    h1 = len(re.findall(r"<h1[\s>]", page))
    if h1 != 1: notes.append(f"h1 count {h1}")
    title = H.unescape(re.search(r"<title>(.*?)</title>", page, re.S).group(1))
    if len(title) >= 60: notes.append(f"title {len(title)} chars")
    m = re.search(r'<meta name="description" content="(.*?)"', page)
    desc = H.unescape(m.group(1)) if m else ""
    if not 140 <= len(desc) <= 155: notes.append(f"description {len(desc)} chars")
    if "01483 612156" not in desc: notes.append("description lacks phone")
    if not re.search(r'<link rel="canonical"', page): notes.append("no canonical")
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', page, re.S)
    types = []
    text = H.unescape(re.sub(r"<[^>]+>", " ", re.sub(r"<script.*?</script>", "", page, flags=re.S)))
    text = re.sub(r"\s+", " ", text)
    for b in blocks:
        data = json.loads(b)
        nodes = data.get("@graph", [data])
        for n in nodes:
            types.append(n.get("@type"))
            if n.get("@type") == "FAQPage":
                for q in n["mainEntity"]:
                    for s in (q["name"], q["acceptedAnswer"]["text"]):
                        if re.sub(r"\s+", " ", s) not in text:
                            notes.append("FAQ text not visible: " + s[:50])
    if re.search(r"\[VERIFY|TODO|XXXX|lorem", page, re.I): notes.append("placeholder marker in HTML")
    for href in set(re.findall(r'href="(/[^"#?]*)', page)):
        if href.startswith("/_next") or href in seen: continue
        seen[href] = status(base + href)
    bad = [h for h in set(re.findall(r'href="(/[^"#?]*)', page)) if not h.startswith("/_next") and seen.get(h) not in ("200", "308")]
    if bad: notes.append("broken links: " + ", ".join(bad))
    problems += bool(notes)
    print(f"{'OK ' if not notes else 'XX '} {path}  [{title}] ({len(title)}) desc {len(desc)}  ld: {types}")
    for n in notes: print("      -", n)
sys.exit(1 if problems else 0)
