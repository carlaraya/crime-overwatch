import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

function formatDate(dateStr) {
  var d = new Date(0)
  d.setUTCMilliseconds(Date.parse(dateStr))
  return d.toLocaleString()
}

export default class FeaturedInfo extends Component {
  render() {
    const article = this.props.article
    return (
      <div>
        <Header size='large'>{article.title}</Header>
        <p>
          <i>
          Posted {formatDate(article.created_at)}
          <br />
          by <Link to={'/police-stations/' + article.police_station_id}>{article.police_station.name}</Link>
          <br />
          crime type: {article.crime_type_id}
          </i>
        </p>
        <p>{article.content}</p>
      </div>
    )
  }
}
