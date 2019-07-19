const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blastTemplate = path.resolve(`src/pages/templates/blast.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `,).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blast post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.fields.slug}`,
        component: blastTemplate,
        context: {
          slug: edge.node.fields.slug
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}