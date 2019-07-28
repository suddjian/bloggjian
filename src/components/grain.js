import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const grainframes = keyframes`
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 30%) }
  90% { transform:translate(-10%, 10%) }
`

const Grain = styled.div`
  position: fixed;
  top: -100%;
  left: -100%;
  z-index: -10;
  background-color: rgb(145, 145, 145);
  background-image: ${props => `url('${props.src}')`};
  background-repeat: repeat;
  animation: 20s steps(10, end) 0s infinite normal none running ${grainframes};
  opacity: 0.02;
  height: 300%;
  width: 300%;
`

const CardboardGrain = () => {
  const data = useStaticQuery(graphql`
    query GrainQuery {
      grain: file(absolutePath: { regex: "/cardboard-inverse-2.png/" }) {
        childImageSharp {
          fixed(quality: 100) {
            src
          }
        }
      }
    }
  `)

  return <Grain src={data.grain.childImageSharp.fixed.src} />
}

export default CardboardGrain
