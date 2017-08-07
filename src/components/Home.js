import React, { Component } from 'react'
import Nav from './Nav'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    return(
      <div className="page-column">
        <Nav />
        <div className="page-column-content">

        </div>
      </div>
    )
  }
}
