import React from "react"
import { Link, graphql } from "gatsby"
import styled from '@emotion/styled'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const Small = styled.small`
  font-size: 0.8rem;
  opacity: 0.6;
  font-weight: 400;
`

const BlogItem = styled.h3`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};
  ${scale(0.1)}
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteName = data.site.siteMetadata.name
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteName}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style={{ marginBottom: '1em' }}>
              <BlogItem>
                <Small>{node.frontmatter.date}</Small>
                <br />
                <Link style={{ }} to={node.fields.slug}>
                  {title}
                </Link>
              </BlogItem>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        name
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
