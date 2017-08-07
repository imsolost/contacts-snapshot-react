import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default class Signup extends Component {

  render() {

    return(
      <div className="page-column">
        <Nav />
        <div className="page-column-content">
          <h1>Signup</h1>
          <form method="post" action="/signup" className="form">
            <pre className="form-errors"></pre>
            <label>
              <span>Username:</span>
              <input type="text" name="username" />
            </label>
            <label>
              <span>Password:</span>
              <input type="password" name="password" />
            </label>
            <input type="submit" value="Signup" />
          </form>
          <br />
          <br />
          <br />
          <p>Already have an account?</p>
          <Link to="/login"> Login Here</Link>
        </div>
      </div>
    )
  }
}
