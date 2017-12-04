import React, { Component } from 'react'
import { Header, Divider } from 'semantic-ui-react'
import MostWantedInfo from './MostWantedInfo.js'
import api from '../api.js'

export default class MostWanted extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mostWanted: null
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

  render() {
    return (
      <div>
        <Header as='h1'>
          Most Wanted
        </Header>
        <Divider hidden/>
        {this.state.mostWanted
          ? this.state.mostWanted.map((mw, i) => {
              return (
                <div key={mw.id}>
                  <MostWantedInfo mw={mw} />
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
