import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"
import Grain from "./grain"

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

  &.narrow {
    max-width: ${rhythm(32)};
  }
`

const Layout = ({ children, narrow }) => (
  <Wrapper className={narrow ? "narrow" : ""}>
    {children}
    <Grain />
  </Wrapper>
)

export default Layout

Layout.Header = ({ children }) => <header>{children}</header>
Layout.Main = ({ children }) => <main>{children}</main>
