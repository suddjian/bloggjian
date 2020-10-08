import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Bio from "../components/bio"
import { LeftArrow } from "../components/decorations"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const Small = styled.span`
  font-size: 0.8rem;
  opacity: 0.6;
  font-weight: 400;
`

const BlogItem = styled.div`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};
`

const Banner = styled.h1`
  @media (min-width: 500px) {
    ${scale(1.5)}
  }
`

const ExtraMenu = styled.div`
  float: right;
  & > * {
    display: inline-block;
    & + * {
      margin-left: 1em;
    }
  }
`

const BlogTitle = styled.h3`
  ${scale(0.2)}
  margin: 0;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { authorEmail, name: siteName } = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout narrow>
        <Layout.Header>
          <nav>
            <div style={{ marginBottom: rhythm(2 / 3) }}>
              <a href="https://suddjian.com">
                <LeftArrow />
                suddjian.com
              </a>
              <ExtraMenu>
                <a href={`mailto:${authorEmail}`}>contact</a>{" "}
                <a href="/rss.xml">rss</a>
              </ExtraMenu>
            </div>
            <Banner
              style={{
                marginBottom: rhythm(1.5),
                marginTop: 0,
                fontWeight: 900,
              }}
            >
              {siteName}
            </Banner>
          </nav>
        </Layout.Header>
        <Layout.Main>
          <SEO title="Everything" />
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div
                key={node.fields.slug}
                style={{ marginBottom: rhythm(1 / 4) }}
              >
                <BlogItem>
                  <BlogTitle>
                    <Link to={node.fields.slug}>{title}</Link>
                  </BlogTitle>
                  <Small>{node.frontmatter.date}</Small>
                </BlogItem>
              </div>
            )
          })}
        </Layout.Main>
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
        authorEmail
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
            title
            date
            description
          }
        }
      }
    }
  }
`
