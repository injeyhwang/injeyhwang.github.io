import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

import typography from "@tailwindcss/typography"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [typography],
}

export default config
