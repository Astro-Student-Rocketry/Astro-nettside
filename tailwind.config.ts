import type { Config } from 'tailwindcss'

// Brand tokens for ASTRO HVL — reference these (e.g. `bg-brand-blue`,
// `text-brand-blueDark`) in components; never hardcode raw hex.
// See CLAUDE.md → Design tokens for contrast/usage rules.
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4894B3', // primary — buttons, accents, fills
          blueLight: '#6BABC5', // hover state on blue fills
          blueDark: '#21607B', // secondary — hover, depth, text links on white
          ink: '#06131A', // near-black navy — dark sections, text on blue fills
          slate: '#2C3A42', // body copy on white
          black: '#000000', // text
          white: '#FFFFFF', // background
        },
      },
      fontFamily: {
        // Body copy.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Headings — technical display face.
        display: ['Archivo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Eyebrows, labels and figures — the "instrumentation" voice.
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        // Full-bleed gutter width shared by the hero and the site chrome.
        wide: '1520px',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.35', transform: 'scale(.8)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2.6s cubic-bezier(.16,1,.3,1) infinite',
      },
    },
  },
}
