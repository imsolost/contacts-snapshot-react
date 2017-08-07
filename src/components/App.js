import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main'

export default class App extends Component {

  render() {
    return (
        <Router>
          <Route path='/' component={Main}/>
          {/* <Route path='/details/:book_id' component={BookDetails} /> */}
          {/* <Route path='/new' component={NewBook} /> */}
          {/* <Route path='*' component={FourOhFour} /> */}
        </Router>
    )
  }
}

// export default App;
