import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

export default class PoliceInfo extends Component {
  render() {
    const policeStation = this.props.policeStation
    return (
      <Card as={Link}
      to={'/police-stations/' + policeStation.id}
      header={policeStation.name}
      description={policeStation.address} />
    )
  }
}
