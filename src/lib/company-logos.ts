import tccLogo from "@/assets/tcc-logo.png";
import tdosLogo from "@/assets/tdos-logo.png";
import nxtlevvelLogo from "@/assets/nxtlevvel-logo.png";
import telcoLogo from "@/assets/telco-logo.png";
import uniscoLogo from "@/assets/unisco-logo.png";
import twoLogo from "@/assets/two-logo.png";

/**
 * Brand marks for the group companies.
 *
 * - The Towell Engineering Group crest is a true vector (SVG), so it stays
 *   perfectly smooth at every size — no rough/pixelated edges.
 * - Companies with their own mark are listed in `OWN_LOGOS`.
 * - Companies listed in `INDEPENDENT_BRANDS` are NOT part of the Towell
 *   visual identity, so they never borrow the TEG crest.
 * - Every other Towell Engineering Group company (branches included)
 *   correctly uses the TEG crest.
 */
export const TEG_LOGO_URL = "/teg-crest.svg";
export const UNISCO_LOGO_URL = uniscoLogo;

const OWN_LOGOS: Record<string, string> = {
  TCC: tccLogo,
  TDOS: tdosLogo,
  NXTLEVVEL: nxtlevvelLogo,
  "NXTLEVVEL BIOCHEM": nxtlevvelLogo,
  TELCO: telcoLogo,
  UNISCO: uniscoLogo,
  TWO: twoLogo,
  "TAYLOR WOODROW OMAN": twoLogo,
};

/** Distinct brands that must not fall back to the TEG crest. */
const INDEPENDENT_BRANDS = new Set(["NXTLEVVEL", "NXTLEVVEL BIOCHEM", "TWO", "TAYLOR WOODROW OMAN"]);

/** Normalises a company code so lookups are whitespace/case insensitive. */
function normalise(code: string) {
  return code.trim().replace(/\s+/g, " ").toUpperCase();
}

/**
 * Resolves the bundled brand mark for a company code.
 * Returns `null` when the brand has no mark yet, so callers can render a
 * placeholder instead of the wrong logo.
 */
export function logoForCompany(code: string): string | null {
  const key = normalise(code);
  if (OWN_LOGOS[key]) return OWN_LOGOS[key];
  if (INDEPENDENT_BRANDS.has(key)) return null;
  return TEG_LOGO_URL;
}
