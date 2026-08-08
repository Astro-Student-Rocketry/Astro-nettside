/**
 * Sponsors and partners.
 *
 * PLACEHOLDER DATA — replace with the real organisations. To edit an entry you
 * touch two places:
 *
 *  1. This file — `name`, `url`, `logo` and `group` (organisation names and
 *     file paths aren't translated).
 *  2. `locales/no.json` + `locales/en.json` under `partners.items.<id>.blurb` —
 *     the one-line description, in both languages.
 *
 * Adding a partner: give them a unique `id`, add the same `id` under
 * `partners.items` in BOTH locale files, and drop the logo in
 * `public/images/partners/`. Prefer SVG; otherwise a transparent PNG, wide
 * rather than tall (roughly 400×160), sized for the web before committing.
 * Entries render in the order listed here, within their group.
 */
export type PartnerGroup = 'sponsors' | 'academic' | 'industry'

export interface Partner {
  /** Stable key — also the i18n lookup: `partners.items.<id>.blurb`. */
  id: string
  /** Organisation name — not translated. Doubles as the logo's alt text. */
  name: string
  /** Full external URL, or `null` for a partner without a public site. */
  url: string | null
  /** Path under `public/`. */
  logo: string
  group: PartnerGroup
}

/** Section order on the page. Labels live at `partners.groups.<group>.*`. */
export const partnerGroups: PartnerGroup[] = ['sponsors', 'academic', 'industry']

const partners: Partner[] = [
  // Sponsors — financial or in-kind support.
  { id: 'sponsor1', name: 'Sponsor One AS', url: 'https://example.com', logo: '/images/partners/sponsor-1.svg', group: 'sponsors' },
  { id: 'sponsor2', name: 'Sponsor Two AS', url: 'https://example.com', logo: '/images/partners/sponsor-2.svg', group: 'sponsors' },
  { id: 'sponsor3', name: 'Sponsor Three AS', url: 'https://example.com', logo: '/images/partners/sponsor-3.svg', group: 'sponsors' },
  { id: 'sponsor4', name: 'Sponsor Four AS', url: 'https://example.com', logo: '/images/partners/sponsor-4.svg', group: 'sponsors' },

  // Academic — universities, faculties, research groups, student networks.
  { id: 'academic1', name: 'Academic Partner One', url: 'https://example.com', logo: '/images/partners/academic-1.svg', group: 'academic' },
  { id: 'academic2', name: 'Academic Partner Two', url: 'https://example.com', logo: '/images/partners/academic-2.svg', group: 'academic' },
  { id: 'academic3', name: 'Academic Partner Three', url: 'https://example.com', logo: '/images/partners/academic-3.svg', group: 'academic' },

  // Industry — suppliers, workshops, technical collaborators.
  { id: 'industry1', name: 'Industry Partner One', url: 'https://example.com', logo: '/images/partners/industry-1.svg', group: 'industry' },
  { id: 'industry2', name: 'Industry Partner Two', url: 'https://example.com', logo: '/images/partners/industry-2.svg', group: 'industry' },
  { id: 'industry3', name: 'Industry Partner Three', url: 'https://example.com', logo: '/images/partners/industry-3.svg', group: 'industry' },
  { id: 'industry4', name: 'Industry Partner Four', url: 'https://example.com', logo: '/images/partners/industry-4.svg', group: 'industry' },
]

export const usePartners = () => ({
  partners,
  groups: partnerGroups,
  partnersIn: (group: PartnerGroup) => partners.filter((p) => p.group === group),
})
