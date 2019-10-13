import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { rhythm, scale } from "../utils/typography"
import Grain from "./grain"
import { LeftArrow } from "./decorations"

const Footer = styled.footer`
  opacity: 0.5;
  margin-top: ${rhythm(2)};
`

const Banner = styled.h1`
  @media(min-width: 500px) {
    ${scale(1.5)}
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <nav>
          <div style={{ marginBottom: `1rem` }}>
            <a className="subtle" href="https://suddjian.com">
              <LeftArrow />suddjian.com
            </a>
            <a href="/rss.xml" className="subtle" style={{ float: "right" }}>rss</a>
          </div>
          <Banner
            style={{
              // ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              fontWeight: 900,
            }}
          >
            {title}
          </Banner>
        </nav>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}
        </Footer>
        <Grain />
      </div>
    )
  }
}

export default Layout
