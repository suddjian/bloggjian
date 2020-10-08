import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import { LeftArrow, RightArrow } from "../components/decorations"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const Content = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteName = this.props.data.site.siteMetadata.name
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <Layout.Header>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link to={`/`}>{siteName}</Link>
          </h3>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
        </Layout.Header>
        <Layout.Main>
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(2),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />

          <div
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              marginTop: rhythm(2),
            }}
          >
            <div>
              {previous && (
                <>
                  Previous:
                  <br />
                  <Link to={previous.fields.slug} rel="prev">
                    <LeftArrow />
                    {previous.frontmatter.title}
                  </Link>
                </>
              )}
            </div>
            <div>
              {next && (
                <>
                  Next:
                  <br />
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                    <RightArrow />
                  </Link>
                </>
              )}
            </div>
          </div>
        </Layout.Main>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        name
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
