import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import Nav from './Nav.js'
import { Segment, Header, Button } from 'semantic-ui-react'
import Home from './Home.js'
import Stats from './Stats.js'
import PoliceStations from './PoliceStations.js'
import FeaturedCrimes from './FeaturedCrimes.js'
import MostWanted from './MostWanted.js'
import Login from './Login.js'
import PoliceStation from './PoliceStation.js'
import api from '../api.js'

function loggedIn() {
  return api.auth
}

function logInRender(nextState, replace) {
  if (loggedIn()) {
    return <Redirect to='/' />
  } else {
    return <Login />
  }
}

function logOutRender(nextState, replace) {
  api.logout()
  return <div>
    <Header as='h3'>Logged out.</Header>
    <Button as={Link} to={'/login'}>Log back in</Button>
  </div>
}

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
          <Segment basic padded style={{margin: '20px 60px'}}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/stats' component={Stats} />
              <Route path="/police-stations/:id" component={PoliceStation}/>
              <Route path='/police-stations' component={PoliceStations} />
              <Route path='/featured-crimes' component={FeaturedCrimes} />
              <Route path='/most-wanted' component={MostWanted} />
              <Route path='/login' render={logInRender} />
              <Route path='/logout' render={logOutRender} />
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
