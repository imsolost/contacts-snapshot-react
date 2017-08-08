import React, { Component } from 'react'
import Nav from './Nav'

export default class ContactDetails extends Component {

  render() {

    return(
      <div className="page-column">
        <Nav />
        <div className="page-column-content">
          Contact Details
        </div>
      </div>
    )
  }
}
