import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

  render() {

    return(
      <nav>
        <Link to="/">Home</Link>
        <form method="get" action="/contacts/search" className="search-form">
          <input name="q" type="search" placeholder="search" autoFocus/>
          <input type="submit" style={{display: 'none'}} />
        </form>
        <Link to="/contacts/new">New Contact</Link>
        <Link to="/login">Logout</Link>
      </nav>
    )
  }
}
