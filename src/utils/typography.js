import Typography from "typography"
import theme from "typography-theme-wordpress-2016"

theme.overrideThemeStyles = ({ rhythm }) => {
  return {
    "*:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)>a": {
      // bold all links except headers
      fontWeight: 500,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h3: {
      marginTop: rhythm(-1),
      fontWeight: 500,
    },
  }
}

theme.googleFonts = [
  {
    name: "IBM Plex Sans",
    styles: ["400", "400i", "500", "500i", "600", "600i", "700", "700i"],
  },
]

theme.baseLineHeight = "1.5rem"
theme.baseFontSize = "17px"
theme.headerFontFamily = ["Montserrat", "georgia", "serif"]
theme.headerWeight = 700
theme.bodyFontFamily = ["IBM Plex Sans", "georgia", "serif"]

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
