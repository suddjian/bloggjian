import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Grain = () => {
  const data = useStaticQuery(graphql`
    query GrainQuery {
      grain: file(absolutePath: { regex: "/cardboard-inverse.png/" }) {
        childImageSharp {
          fixed(quality: 100) {
            src
          }
        }
      }
    }
  `)

  const { src } = data.grain.childImageSharp.fixed

  return <div style={{
    position: `fixed`,
    top: `-100%`,
    left: `-100%`,
    zIndex: `-10`,
    backgroundColor: `#919191`, /* average color of grain image, to prevent jarring pop-in */
    backgroundImage: `url('${src}')`,
    backgroundRepeat: `repeat`,
    animation: `grain 20s steps(10) infinite`,
    opacity: `0.07`,
    height: `300vh`,
    width: `300vw`
  }} />
}

export default Grain
