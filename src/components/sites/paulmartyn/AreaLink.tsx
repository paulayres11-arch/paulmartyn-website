import { AREA_PAGES } from "./content";
import { A } from "./Prose";

/**
 * A village name that links to its area page once there is one, and stays
 * plain text until then — so copy can name a village before its page exists
 * without shipping a link to a 404. Same rule the footer follows.
 */
export function AreaLink({ place, children }: { place: string; children?: React.ReactNode }) {
  const href = AREA_PAGES[place];
  const label = children ?? place;
  return href ? <A href={href}>{label}</A> : <>{label}</>;
}
