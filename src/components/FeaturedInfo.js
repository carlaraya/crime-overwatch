import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'

function truncate(str, len) {
  if (str.length > len)
    return str.substring(0, len - 15).replace(/\w+$/, '') + '...'
  else return str
}

export default class FeaturedInfo extends Component {
  render() {
    const article = this.props.article
    return (
      <Segment>
        <Header size='large'>{article.title}</Header>
        <p>
          <i>
          Posted {article.datetime_posted}
          <br />
          by <a href='https://google.com'>{article.precinct}</a>
          <br />
          crime type: {article.crimetype}
          </i>
        </p>
      <p>{truncate(article.content, 140)} <a href=''>See more</a></p>
      </Segment>
    )
  }
}
