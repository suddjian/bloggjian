import Typography from "typography"
import theme from "typography-theme-wordpress-2016"

theme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

theme.googleFonts = [
  {
    name: 'IBM Plex Sans',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
]

theme.headerFontFamily = ['Montserrat', 'georgia', 'serif']
theme.headerWeight = 800
theme.bodyFontFamily = ['IBM Plex Sans', 'georgia', 'serif']

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
