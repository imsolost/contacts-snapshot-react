import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

export default class App extends Component {

  render() {
    return (
        <Router>
          {/* Figure out how to replace Router with a switch and remove the div*/}
          <div>
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            {/* <Route path='/details/:book_id' component={BookDetails} /> */}
            {/* <Route path='/new' component={NewBook} /> */}
            {/* <Route path='*' component={FourOhFour} /> */}
          </div>
        </Router>
    )
  }
}

// export default App;
