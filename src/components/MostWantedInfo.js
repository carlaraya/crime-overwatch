import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

export default class MostWantedInfo extends Component {
  render() {
    const mw = this.props.mw
    return (
      <div>
        <Header size='small'>{mw.name}</Header>
        <p>
            Wanted by <Link to={'/police-stations/' + mw.police_stations[0].id}>{mw.police_stations[0].name}</Link>
        </p>
        <p>
          <i>
          Crime Type: {mw.crime_type_id}
          <br />
          Exact Crime: {mw.exact_crime}
          <br />
          Reward: {mw.reward} pesos
          <br />
          
          </i>
        </p>
        <p>{mw.additional_info}</p>
      </div>
    )
  }
}