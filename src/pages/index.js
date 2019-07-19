import React from "react"

import Layout from "../components/layout"
import BlastSnippet from "../components/blastsnippet"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const blast = data.allMarkdownRemark.edges[0].node;
  const image =  require("../images/" + blast.frontmatter.image);
  return (
  <Layout>
    <SEO title="Home" />
    <BlastSnippet key={blast.fields.slug}
      image={image}
      location={blast.frontmatter.location}
      date={blast.frontmatter.date}
      person={blast.frontmatter.person}
      slug={blast.fields.slug}
      text={blast.excerpt}/>
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
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