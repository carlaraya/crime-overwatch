import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'
import api from '../api.js'
import MostWantedForm from './MostWantedForm.js'

export default class MostWantedInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      hidden: false
    }
  }

  closeForm = function(mw) {
    this.props.mw.name = mw.name
    this.props.mw.crime_type_id = mw.crime_type_id
    this.props.mw.exact_crime = mw.exact_crime
    this.props.mw.reward = mw.reward
    this.props.mw.additional_info = mw.additional_info
    this.setState({ isEditing: false })
  }.bind(this)


  isMine() {
    return api.id === this.props.mw.police_stations[0].id

  }
  onDelete = () => {
    api.deleteMostWanted(this.props.mw.id)
    .done(function() {this.setState({hidden: true})}.bind(this))
  }

  render() {
    const mw = this.props.mw
    if (this.state.isEditing) {
      return <MostWantedForm mw={mw} onSubmit={this.closeForm} />
    } else if (!this.state.hidden) {
      return (
        <div>
          <Header size='small'>
            {mw.name}
            { this.isMine()
              ? <div>
                  <Icon link name='edit' onClick={() => {this.setState({isEditing: true})}}/>
                  <Icon link name='window close' onClick={this.onDelete}></Icon>
                </div>
              : null
            }
          </Header>
          <p>
              Wanted by <Link to={'/police-stations/' + (this.props.policeStationId ? this.props.policeStationId : mw.police_stations[0].id)}>{this.props.policeStationName ? this.props.policeStationName : mw.police_stations[0].name}</Link>
          </p>
          <p>
            <i>
            Crime Type: {api.crimeTypes[mw.crime_type_id-1]}
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
    } else {
      return null;
    }
  }
}
