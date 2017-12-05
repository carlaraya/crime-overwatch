import React, { Component } from 'react'
import { Header, Divider, Button } from 'semantic-ui-react'
import MostWantedInfo from './MostWantedInfo.js'
import MostWantedForm from './MostWantedForm.js'
import api from '../api.js'

export default class MostWanted extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mostWanted: null,
      isCreating: false
    }
    this.getMostWanted = this.getMostWanted.bind(this)
  }

  componentDidMount() {
    this.getMostWanted()
  }

  getMostWanted() {
    if (this.props.data) {
      this.setState(function() {
        return { mostWanted: this.props.data }
      })
    } else {
      api.getMostWanted().then(function(data) {
        this.setState(function() {
          return { mostWanted: data }
        })
      }.bind(this))
    }
  }

  isMine() {
    return api.id.toString() === this.props.policeStationId
  }

  closeForm = function(mw) {
    var newmw = JSON.parse(JSON.stringify(mw))
    this.state.mostWanted.unshift(mw)
    this.setState({ isCreating: false })

  }.bind(this)

  render() {
    return (
      <div>
        <Header as='h1'>
          Most Wanted
        </Header>
        { this.isMine()
          ? (this.state.isCreating
            ? <MostWantedForm onSubmit={this.closeForm} mw={{}} />
            : <Button fluid onClick={() => {this.setState({isCreating: true})}}>Add Most Wanted</Button>)
            : null
        }
        <Divider hidden/>
        {this.state.mostWanted
          ? this.state.mostWanted.map((mw, i) => {
              return (
                <div key={mw.id}>
                  <MostWantedInfo mw={mw}  policeStationId = {this.props.policeStationId} policeStationName={this.props.policeStationName} />
                  <Divider />
                </div>
              )
            })
          : <Header as='h3'>Loading...</Header>
        }
      </div>
    )
  }
}
