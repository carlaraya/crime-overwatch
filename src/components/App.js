import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from './Nav.js'
import { Segment, Container } from 'semantic-ui-react'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='container'>
          <Nav />
          <Segment basic padded as={Container}>
            <Switch>
              <Route exact path='/' component={function(){return null;}} />
              <Route exact path='/stats' component={function(){return null;}} />
              <Route path='/precincts' component={function(){return null;}} />
              <Route path='/featured-crimes' component={function(){return null;}} />
              <Route path='/most-wanted' component={function(){return null;}} />
              <Route path='/login' component={function(){return null;}} />
              <Route render={function() {
                return <p>Not Found</p>
              }} />
            </Switch>
          </Segment>
        </div>
      </HashRouter>
    );
  }
}
