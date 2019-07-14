import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from 'gatsby-image'

const Header = () =>  {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/">
        <Img
          fluid={data.file.childImageSharp.fluid} 
          alt="Gossip Girl logo"
        />
      </Link>
    </div>
  </header>
)}

export default Header
