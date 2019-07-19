import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const BlastStyle = styled('div')`
  border-radius: 15px;
  background: #fff;
  display: block;
  padding: 20px;
  margin: 2em 0;
  overflow: hidden;
  h2, p {
    color: #000;
  }
  h2 {
    margin: .5em 0 1em 0;
  }
  small {
    float: right;
  }
`

const BlastSnippet = props => {
  const slug = props.slug ? props.slug : ''
  return(
  <BlastStyle>
    <Link style={{ boxShadow: 'none' }} to={slug}>
      <h2>Spotted: {props.person}</h2>
      <img
         title="Header image"
         alt="Hero banner"
         src={props.image}
       />
    </Link>
    <p>Spotted at {props.location} </p>
    <p dangerouslySetInnerHTML={{ __html: props.text }} />
    <p><small>{props.date}</small></p>
  </BlastStyle>
)};

export default BlastSnippet
