import React from 'react'
import { Link,  useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const NavItem = styled('div')`
  border-radius: 50%;
  background: #b8b365;
  margin: 2em auto;
  width: 50%;
  display: block;
  padding: 10px;
  text-align: center;

  .nav-link {
    display: inline-block;
    box-shadow: none;
    color: #000;
  }
  img.circle {
    border-radius: 50%;
    width: 75%;
    margin: 0 auto;
    display: block;
  }
 `

const RightNav = () => {
  const data = useStaticQuery(graphql`
    query {
      serena: file(relativePath: { eq: "jesswhite.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dan: file(relativePath: { eq: "dylanbeattie.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nate: file(relativePath: { eq: "jonskeet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blair: file(relativePath: { eq: "patriciaaas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <NavItem>
      <Link className="nav-link" to="/">
        <Img className="circle" fluid={data.nate.childImageSharp.fluid} alt="home" />
        {' '}home{' '}
      </Link>

      </NavItem>

      <NavItem>
        <Link className="nav-link" to="/posts">
          <Img className="circle" fluid={data.dan.childImageSharp.fluid} alt="posts" />
          {' '}posts{' '}
        </Link>
      </NavItem>

      <NavItem>
        <Link className="nav-link" to="/pics">
          <Img className="circle" fluid={data.blair.childImageSharp.fluid} alt="pics" />
          {' '}pics{' '}
        </Link>
      </NavItem>

      <NavItem>
        <Link className="nav-link" to="/cast">
          <Img className="circle" fluid={data.serena.childImageSharp.fluid} alt="cast" />
          {' '}cast{' '}
        </Link>
      </NavItem>
    </div>
  )
}

export default RightNav
