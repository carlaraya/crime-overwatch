import React, { Component } from 'react'
import { Header, Divider, Grid } from 'semantic-ui-react'
import api from '../api.js'
import FeaturedCrimes from './FeaturedCrimes.js'
import MostWanted from './MostWanted.js'

export default class PoliceStation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      policeStation: null
    }
    this.getPoliceStation = this.getPoliceStation.bind(this)
  }

  componentDidMount() {
    this.getPoliceStation()
  }

  getPoliceStation() {
    api.getPoliceStation(this.props.match.params.id).then(function(data) {
      this.setState(function() {
        data.featured_crimes.map(function(featured_crime) {
          featured_crime.police_station = { name: data.name }
          return null
        })
        data.most_wanteds.map(function(most_wanted) {
          most_wanted.police_stations = [{ id: data.id, name: data.name }]
          return null
        })
        return { policeStation: data }
      })
    }.bind(this))
  }

  render() {
    const policeStation = this.state.policeStation
    return policeStation
      ? <div>
          <Header as='h1'>{policeStation.name}</Header>
          <p>
            Address: {policeStation.address}
            <br />
            Email: {policeStation.email}
          </p>
          <p>Lat: {policeStation.lat}, Long: {policeStation.lng}</p>
          <Divider hidden/>
          <Grid divided={false}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <FeaturedCrimes policeStationId={this.props.match.params.id} data={policeStation.featured_crimes}/>
              </Grid.Column>
              <Grid.Column>
                <MostWanted policeStationId={this.props.match.params.id} policeStationName={policeStation.name} data={policeStation.most_wanteds}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      : <Header as='h3'>Loading...</Header>
  }
}
