import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlastSnippet from '../components/blastsnippet'

export default({data}) => {
  const blasts = data.allMarkdownRemark.edges
  return(
    <Layout>
      <h1>The Scandal</h1>
      {blasts.map(({ node }) => {
        const image = require('../images/' + node.frontmatter.image);
        return (
          <BlastSnippet key={node.fields.slug}
            image={image}
            location={node.frontmatter.location}
            date={node.frontmatter.date}
            person={node.frontmatter.person}
            slug={node.fields.slug}
            text={node.excerpt}/>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
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
            image
            person
            location
          }
        }
      }
    }
  }
`
