import React, { Component } from 'react'
import { Header, Divider } from 'semantic-ui-react'
import FeaturedInfo from './FeaturedInfo.js'
import api from '../api.js'

export default class FeaturedCrimes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: null
    }
    this.getArticles = this.getArticles.bind(this)
  }

  componentDidMount() {
    this.getArticles()
  }

  getArticles() {
    if (this.props.data) {
      this.setState(function() {
        return { articles: this.props.data }
      })
    } else {
      api.getFeaturedCrimes().then(function(data) {
        this.setState(function() {
          return { articles: data }
        })
      }.bind(this))
    }
  }

  render() {
    return (
      <div>
        <Header as='h1'>
          Featured Crimes
        </Header>
        <Divider hidden/>
        {this.state.articles
          ? this.state.articles.map((article, i) => {
              return (
                <div key={article.id}>
                  <FeaturedInfo article={article} />
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
