import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from './Nav.js'
import { Segment, Container } from 'semantic-ui-react'
import Home from './Home.js'
import Stats from './Stats.js'
import PoliceStations from './PoliceStations.js'
import FeaturedCrimes from './FeaturedCrimes.js'
import MostWanted from './MostWanted.js'
import Login from './Login.js'
import PoliceStation from './PoliceStation.js'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='container'>
          <Nav />
          <Segment basic padded as={Container}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/stats' component={Stats} />
              <Route path="/police-stations/:id" component={PoliceStation}/>
              <Route path='/police-stations' component={PoliceStations} />
              <Route path='/featured-crimes' component={FeaturedCrimes} />
              <Route path='/most-wanted' component={MostWanted} />
              <Route path='/login' component={Login} />
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
