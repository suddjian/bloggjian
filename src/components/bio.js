/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = ({ style }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-2.jpg/" }) {
        childImageSharp {
          fixed(width: 70, height: 70, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
        ...style,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1),
          marginBottom: 0,
          minWidth: 70,
          borderRadius: `100%`,
          border: `2px solid rgba(255, 255, 255, 0.8)`,
          boxShadow: `1px 1px 2px 1px rgba(0, 0, 0, 0.15)`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ margin: 0 }}>
        Hi, I'm Aaron. I'm a programmer from California. I work on nerdy web
        stuff at some startup. I like to learn and write and watch weird movies
        and make things. Currently hunkering down to do my part in a pandemic,
        working on bettering myself through learning and personal projects.
      </p>
    </div>
  )
}

export default Bio
