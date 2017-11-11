import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default class FeaturedInfo extends Component {
  render() {
    const article = this.props.article
    return (
      <div>
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
        <p>{article.content}</p>
      </div>
    )
  }
}
