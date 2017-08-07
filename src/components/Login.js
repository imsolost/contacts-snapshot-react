import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default class Login extends Component {

  render() {

    return(
      <div className="page-column">
        <Nav />
        <div className="page-column-content">
          <h1>Login</h1>
          <form method="post" action="/login" className="form">
            <pre className="form-errors"></pre>
            <label>
              <span>Username:</span>
              <input type="text" name="username" />
            </label>
            <label>
              <span>Password:</span>
              <input type="password" name="password" />
            </label>
            <input type="submit" value="Login" />
          </form>
          <br />
          <br />
          <br />
          <p>Don't have an account?</p>
          <Link to="/signup"> Signup Here</Link>
        </div>
      </div>
    )
  }
}
