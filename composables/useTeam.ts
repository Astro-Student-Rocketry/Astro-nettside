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
export type TeamGroup = 'board' | 'propulsion' | 'avionics' | 'recovery' | 'web' | 'airframe' | 'finance'

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
export const teamGroups: TeamGroup[] = ['board', 'propulsion', 'avionics', 'recovery', 'web', 'airframe', 'finance']

const PLACEHOLDER_PORTRAIT = '/images/team/placeholder.jpg'

const members: TeamMember[] = [
  // Board
  { id: 'ceo', name: 'Herman Andreas Linnestad', image: PLACEHOLDER_PORTRAIT, group: 'board' },
  { id: 'coo', name: 'Magnus Fondenes', image: PLACEHOLDER_PORTRAIT, group: 'board' },
  { id: 'cfo', name: 'John Ulrik Osmundsen', image: PLACEHOLDER_PORTRAIT, group: 'board' },
  { id: 'boardMember', name: 'Halvor', image: PLACEHOLDER_PORTRAIT, group: 'board' },
  { id: 'boardMember', name: 'Trond Erik', image: PLACEHOLDER_PORTRAIT, group: 'board' },

  // Propulsion
  { id: 'propulsionLead', name: 'Halvor', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionLead', name: 'Mathias', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionLead', name: 'Odin', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Jeremy Roult', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Vladyslav', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Mathias Brekke', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Julie Johansen', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Lars Erik', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Marius Hanstveit', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Entesar', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },
  { id: 'propulsionTest', name: 'Andreas Olsen', image: PLACEHOLDER_PORTRAIT, group: 'propulsion' },

  // Airfrane
  { id: 'airframeLead', name: 'Isak', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframeLead', name: 'Hans', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Trygve Haugland', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Martin Aasenhus', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Herman Brenne', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Anders Tynning', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Henrik Egge', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Benjamin Simpson', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Arn Christian', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Trygve Rønnevik', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },
  { id: 'airframe', name: 'Ibrahim', image: PLACEHOLDER_PORTRAIT, group: 'airframe' },

  // Avionics
  { id: 'avionicsLead', name: 'Magnus', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsLead', name: 'Herman', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsLead', name: 'Kristian', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsSoftware', name: 'Svale', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsSoftware', name: 'Jon Noe Høye', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsHardware', name: 'Daniel Amøy', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsHardware', name: 'Bent Midtbø', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsHardware', name: 'Ken Kvingedal', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },
  { id: 'avionicsHardware', name: 'Emil Kapstad', image: PLACEHOLDER_PORTRAIT, group: 'avionics' },

  // Recovery
  { id: 'recoveryLead', name: 'Jacom', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryLead', name: 'Trond Erik', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryLead', name: 'Elias', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryParachute', name: 'Sondre Solbakken', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryDeployment', name: 'Magnus Mongstad', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryDeployment', name: 'Surafi', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryDeployment', name: 'Aleksander Hurlen', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryDeployment', name: 'Isak Gyldenskog Kilnes', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },
  { id: 'recoveryDeployment', name: 'Christian Løken', image: PLACEHOLDER_PORTRAIT, group: 'recovery' },

  // Web
  { id: 'webLead', name: 'Ael', image: PLACEHOLDER_PORTRAIT, group: 'web' },
  { id: 'webDeveloper', name: 'Maja', image: PLACEHOLDER_PORTRAIT, group: 'web' },
  { id: 'webDeveloper', name: 'Adrian', image: PLACEHOLDER_PORTRAIT, group: 'web' },

  // Finance
  { id: 'financeLead', name: 'John', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
  { id: 'financeLead', name: 'Elisa', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
  { id: 'financeLead', name: 'Elias', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
  { id: 'finance', name: 'Kristian Buvik', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
  { id: 'finance', name: 'Fredrik Helland', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
  { id: 'finance', name: 'Karen Plukkerud', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
  { id: 'finance', name: 'Marthe Osen', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
  { id: 'finance', name: 'Maria Landro', image: PLACEHOLDER_PORTRAIT, group: 'finance' },
]

export const useTeam = () => ({
  members,
  groups: teamGroups,
  membersIn: (group: TeamGroup) => members.filter((m) => m.group === group),
})
