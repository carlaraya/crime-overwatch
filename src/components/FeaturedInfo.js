import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Button, Icon } from 'semantic-ui-react'
import api from '../api.js'
import FeaturedCrimeForm from './FeaturedCrimeForm.js'

function formatDate(dateStr) {
  var d = new Date(0)
  d.setUTCMilliseconds(Date.parse(dateStr))
  return d.toLocaleString()
}

export default class FeaturedInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      hidden: false
    }
  }

  closeForm = function() {
    this.setState({ isEditing: false })
  }.bind(this)

  isMine() {
    console.log(api.id)
    console.log(this.props.article.police_station_id)
    return api.id === this.props.article.police_station_id
  }

  onDelete = () => {
    api.deleteFeaturedCrime(this.props.article.id)
    .done(function() {this.setState({hidden: true})}.bind(this))
  }

  render() {
    const article = this.props.article
    if (this.state.isEditing) {
      return <FeaturedCrimeForm article={article} onSubmit={this.closeForm} />
    } else if (!this.state.hidden) {
      return (
        <div>
          <Header size='medium'>
            {article.title} 
            { this.isMine()
              ? <div>
                  <Icon link name='edit' onClick={() => {this.setState({isEditing: true})}}/>
                  <Icon link name='window close' onClick={this.onDelete}></Icon>
                </div>
              : null
            }
            
          </Header>
          <p>
            <i>
            Posted {formatDate(article.created_at)}, updated {formatDate(article.updated_at)}
            <br />
            by <Link to={'/police-stations/' + article.police_station_id}>{article.police_station.name}</Link>
            <br />
            crime type: {api.crimeTypes[article.crime_type_id-1]}
            </i>
          </p>
          <p>{article.content}</p>
        </div>
      )
    } else {
      return null
    }
  }
}
