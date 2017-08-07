import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

  render() {

    return(
      <nav>
        <Link to="/home">Home</Link>
        <form method="get" action="/contacts/search" className="search-form">
          <input name="q" type="search" placeholder="search" autoFocus/>
          <input type="submit" style={{display: 'none'}} />
        </form>
        <Link to="/contacts/new">New Contact</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    )
  }
}
