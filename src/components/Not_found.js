import React, { Component } from 'react'
import Nav from './Nav'

export default class Not_found extends Component {

  render() {

    return(
      <div className="page-column">
        <Nav />
        <div className="page-column-content">
          <h1>Page Not Found</h1>
          <h3>Sorry, the page you have requested was not found :/</h3>
        </div>
      </div>
    )
  }
}
