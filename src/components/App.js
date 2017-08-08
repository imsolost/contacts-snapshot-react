import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import New from './New'
import ContactDetails from './ContactDetails'
// import Not_found from './Not_found'

export default class App extends Component {

  render() {
    return (
        <Router>
          {/* Figure out how to replace Router with a switch and remove the div*/}
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/contacts/new' component={New} />
            <Route path='/contacts/:id' component={ContactDetails} />

            {/* <Route path='*' component={Not_found} /> */}
          </div>
        </Router>
    )
  }
}

// export default App;
