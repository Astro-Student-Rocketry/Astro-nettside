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
          blueDark: '#21607B', // secondary — hover, depth, text links on white
          black: '#000000', // text
          white: '#FFFFFF', // background
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
