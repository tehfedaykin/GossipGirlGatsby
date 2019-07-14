import React from 'react'
import { Link } from 'gatsby'

class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <h2 style={{color: '#34a6a8'}}>welcome</h2>
            <p>to Gossip Girl<br />
            The Site ABOUT the<br />
            Upper East Side,<br />
            FOR the Upper East<br />
            Side and BY the<br />
            Upper East Side!</p>
          </li>
          <li>
            <h2 style={{color: '#c2734c'}}>gossip</h2>
            <p>The latest "411"<br />
            on all the in people</p>
          </li>
          <li>
            <h2 style={{color: '#e0ed93'}}>pics</h2>
            <p>The latest "411"<br />
            on all the in people</p>
            <Link className="nav-link" to="/pics">{' '}CURRENT PHOTO GALLERY{' '}</Link>
          </li>
          <li>
            <h2 style={{color: '#cc5a6f'}}>parties</h2>
            <p>Your invitation was probably lost in the mail.</p>
            <p><Link className="nav-link" to="/posts">{' '}CLICK HERE{' '}</Link> to see what you missed!</p>
          </li>
          <li>
            <h2 style={{color: '#85a14d'}}>links</h2>
          </li>
        </ul>
      </div>
    )
  }
}

export default LeftNav
