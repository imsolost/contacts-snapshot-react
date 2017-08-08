import React, { Component } from 'react'
import Nav from './Nav'
import Contacts from './Contacts'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: []
    }

    this.getAllContacts = this.getAllContacts.bind(this)
  }

  componentDidMount() {
    this.getAllContacts()
  }

  getAllContacts() {
    fetch('http://localhost:3000/all', {
      method: 'get',
    })
    .then( response => response )
    .then( contacts => this.setState({ contacts: contacts }) )
    .catch( err => { console.log('err', err) })
  }

  render() {
    console.log(this.state);

    return(
      <div className="page-column">
        <Nav />
        <div className="page-column-content">
          <Contacts />
        </div>
      </div>
    )
  }
}
