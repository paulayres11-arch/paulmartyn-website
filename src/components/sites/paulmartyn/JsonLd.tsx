/**
 * Server-rendered JSON-LD.
 *
 * One node renders as itself; several are wrapped in a single `@graph`, which
 * is one script tag per page instead of one per schema type.
 *
 * `<` is escaped so a string containing "</script>" cannot close the tag early.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
