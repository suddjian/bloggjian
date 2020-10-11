import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteName = data.site.siteMetadata.name

    return (
      <Layout location={this.props.location} title={siteName}>
        <SEO title="404: Not Found" />
        <h1>Page Not Found</h1>
        <p>You get nothing! You lose! Good day, sir!</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        name
      }
    }
  }
`
