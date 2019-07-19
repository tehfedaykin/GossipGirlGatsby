import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

import Layout from '../components/layout'
import BlastSnippet from '../components/blastsnippet'

export default({data}) => {
  const blast = data.markdownRemark
  const image = require('../images/' + blast.frontmatter.image);
  return(
    <Layout>
      <SEO title={blast.title} />
      <BlastSnippet key={blast.title}
        image={image}
        date={blast.frontmatter.date}
        person={blast.frontmatter.person}
        text={blast.html}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
        person
        location
      }
    }
  }
`
