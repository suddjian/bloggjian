import React from "react"
import styled from "@emotion/styled"

const Undecorated = styled.span`
  display: inline-block;
  text-decoration: none;
`

export const LeftArrow = () => <Undecorated>←&nbsp;</Undecorated>

export const RightArrow = () => <Undecorated>&nbsp;→</Undecorated>
