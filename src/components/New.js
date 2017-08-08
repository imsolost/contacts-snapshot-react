import React, { Component } from 'react'
import Nav from './Nav'

export default class New extends Component {

  render() {

    return(
      <div className="page-column">
        <Nav />
        <div className="page-column-content">
          <h1>New Contact</h1>

          <form method="post" action="/contacts" className="new-contact-form form">
            <pre className="new-contact-form-errors form-errors"></pre>
            <label>
              <span>First name:</span>
              <input type="text" name="first_name" />
            </label>
            <label>
              <span>Last name:</span>
              <input type="text" name="last_name" />
            </label>
            <input type="submit" value="Add Contact" />
          </form>
        </div>
      </div>
    )
  }
}
