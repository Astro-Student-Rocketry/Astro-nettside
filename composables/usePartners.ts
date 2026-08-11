/**
 * Sponsors and partners.
 *
 * Adding a partner:
 *  1. Drop the logo in `public/images/partners/` — SVG if you have it, otherwise
 *     a transparent PNG. The logo wall sits on a DARK background, so use the
 *     light/knockout version of the logo. If you only have a dark-on-transparent
 *     version, set `knockout: true` and it gets rendered in white.
 *  2. Add an entry below with a unique `id`, the organisation name, the URL and
 *     the group. Entries render in the order listed, within their group.
 *
 * Nothing here is translated — organisation names and file paths are the same in
 * both languages. Section headings live at `partners.groups.<group>.*` in
 * `locales/no.json` + `locales/en.json`.
 */
export type PartnerGroup = "sponsors" | "academic" | "industry";

export interface Partner {
  /** Stable key — used as the list key. */
  id: string;
  /** Organisation name — not translated. Doubles as the logo's alt text. */
  name: string;
  /** Full external URL, or `null` for a partner without a public site. */
  url: string | null;
  /** Path under `public/`. */
  logo: string;
  group: PartnerGroup;
  /**
   * How much empty margin the logo file has around the artwork, so every logo
   * lands at a similar optical size on the wall: `square` for a roomy square
   * export canvas (what most of ours are), `wide` for a file cropped tight to a
   * wide wordmark. If a logo looks too small or too big, flip this first.
   */
  fit: "square" | "wide";
  /** Dark-on-transparent logo — render it knocked out to white. */
  knockout?: boolean;
}

/** Section order on the page. Labels live at `partners.groups.<group>.*`. */
export const partnerGroups: PartnerGroup[] = [
  "sponsors",
  "academic",
  "industry",
];

const partners: Partner[] = [
  // Sponsors — funding and in-kind support.
  {
    id: "frifond",
    name: "Frifond",
    url: "https://www.frifond.no",
    logo: "/images/partners/frifond.svg",
    group: "sponsors",
    fit: "square",
  },
  {
    id: "kulturstyret",
    name: "Kulturstyret Bergen",
    url: "https://kulturstyret.no",
    logo: "/images/partners/kulturstyret.png",
    group: "sponsors",
    fit: "wide",
  },
  {
    id: "bob",
    name: "BOB",
    url: "https://www.bob.no",
    logo: "/images/partners/bob.svg",
    group: "sponsors",
    fit: "wide",
    knockout: true,
  },
  {
    id: "borslid-skog",
    name: "Børslid Skog",
    url: null,
    logo: "/images/partners/borslid-skog.svg",
    group: "sponsors",
    fit: "square",
  },

  // Academic and network — study programmes, research groups, student networks.
  {
    id: "norstec",
    name: "NORSTEC",
    url: "https://norstec.no",
    logo: "/images/partners/norstec.svg",
    group: "academic",
    fit: "square",
  },
  {
    id: "nordic-space-bridge",
    name: "Nordic Space Bridge",
    url: "https://nifro.no/portfolio-item/nordic-space-bridge/",
    logo: "/images/partners/nordic-space-bridge.svg",
    group: "sponsors",
    fit: "square",
  },
  {
    id: "space-lab",
    name: "Space Lab",
    url: "https://spacelab.tech",
    logo: "/images/partners/space-lab.svg",
    group: "sponsors",
    fit: "square",
  },
  {
    id: "space-162",
    name: "Space 162",
    url: "https://space162.xyz",
    logo: "/images/partners/space-162.svg",
    group: "academic",
    fit: "square",
  },

  // Industry — suppliers, tooling and technical collaborators.
  {
    id: "nammo",
    name: "Nammo",
    url: "https://www.nammo.com",
    logo: "/images/partners/nammo.svg",
    group: "industry",
    fit: "square",
    knockout: true,
  },
  {
    id: "ccb-subsea",
    name: "CCB Subsea",
    url: "https://www.ccbsubsea.no",
    logo: "/images/partners/ccb-subsea-white.png",
    group: "sponsors",
    fit: "square",
  },
  {
    id: "altium",
    name: "Altium",
    url: "https://www.altium.com",
    logo: "/images/partners/altium.svg",
    group: "industry",
    fit: "square",
  },
  {
    id: "ansys",
    name: "Ansys",
    url: "https://www.ansys.com",
    logo: "/images/partners/ansys.svg",
    group: "industry",
    fit: "square",
  },
];

export const usePartners = () => ({
  partners,
  groups: partnerGroups,
  partnersIn: (group: PartnerGroup) =>
    partners.filter((p) => p.group === group),
});
