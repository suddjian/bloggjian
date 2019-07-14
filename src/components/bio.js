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

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-2.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 100) {
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

  const { author, authorEmail } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          border: `1px solid rgba(0, 0, 100, 0.5)`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong>, a programmer from Santa Cruz building useful things for money and useless things for fun.
        <br />
        Currently <a href={`mailto:${authorEmail}`}>looking for work</a> at an awesome company!
      </p>
    </div>
  )
}

export default Bio
