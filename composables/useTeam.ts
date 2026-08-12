/**
 * The ASTRO roster, grouped by board and technical teams.
 *
 * PLACEHOLDER DATA — replace with the real people. To edit a member you touch
 * two places:
 *
 *  1. This file — `name`, `image` and `group` (names and file paths aren't
 *     translated).
 *  2. `locales/no.json` + `locales/en.json` under `team.members.<id>` —
 *     the member's `role` and one-line `blurb`, in both languages.
 *
 * Adding a member: give them a unique `id`, add the same `id` under
 * `team.members` in BOTH locale files, and drop a portrait in
 * `public/images/team/` (portrait crop, ~800×1000, a few hundred KB).
 * Members render in the order listed here, within their group.
 */
export type TeamGroup = 'board' | 'propulsion' | 'structures' | 'avionics' | 'recovery'

export interface TeamMember {
  /** Stable key — also the i18n lookup: `team.members.<id>.role` / `.blurb`. */
  id: string
  /** Display name — not translated. */
  name: string
  /** Path under `public/`. Falls back to the shared placeholder. */
  image: string
  group: TeamGroup
}

/** Section order on the page. Labels live at `team.groups.<group>.*`. */
export const teamGroups: TeamGroup[] = ['board', 'propulsion', 'structures', 'avionics', 'recovery']

const PLACEHOLDER_PORTRAIT = '/images/team/placeholder.jpg'

const members: TeamMember[] = [
  // Board
  { id: 'president', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'board' },
  { id: 'vicePresident', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'board' },
  { id: 'treasurer', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'board' },
  { id: 'communications', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'board' },

  // Propulsion
  { id: 'propulsionLead', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionEngineer', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },

  // Structures
  { id: 'structuresLead', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'structures' },
  { id: 'structuresAirframe', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'structures' },

  // Avionics
  { id: 'avionicsLead', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsSoftware', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsHardware', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },

  // Recovery
  { id: 'recoveryLead', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryParachute', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryDeployment', name: 'Fornavn Etternavn', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
]

export const useTeam = () => ({
  members,
  groups: teamGroups,
  membersIn: (group: TeamGroup) => members.filter((m) => m.group === group),
})
