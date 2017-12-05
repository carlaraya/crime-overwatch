import React, { Component } from 'react'
import { Header, Divider } from 'semantic-ui-react'
import PoliceInfo from './PoliceInfo.js'
import api from '../api.js'

export default class PoliceStations extends Component {
  constructor (props) {
    super(props)
    this.state = {
      policeStations: null
    }
    this.getPoliceStations = this.getPoliceStations.bind(this)
  }

  componentDidMount() {
    this.getPoliceStations()
  }

  getPoliceStations() {
    api.getPoliceStations().then(function(data) {
      this.setState(function() {
        data.sort((a, b) => a.id - b.id)
        return { policeStations: data }
      })
    }.bind(this))
  }

  render() {
    return (
      <div>
        <Header as='h1'>
          Police Stations
        </Header>
        <Divider hidden/>
	      {this.state.policeStations
	        ? this.state.policeStations.map((policeStation, i) => {
              return (
                <div key={policeStation.id}>
                  <PoliceInfo policeStation={policeStation} />
                </div>
              )
            })
          : <Header as='h3'>Loading...</Header>
        }
      </div>
    )
  }
}
