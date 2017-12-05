import React, { Component } from 'react'
import { Header, Divider, Button } from 'semantic-ui-react'
import FeaturedInfo from './FeaturedInfo.js'
import FeaturedCrimeForm from './FeaturedCrimeForm.js'
import api from '../api.js'

export default class FeaturedCrimes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
      isCreating: false
    }
    this.getArticles = this.getArticles.bind(this)
  }

  componentDidMount() {
    this.getArticles()
  }

  closeForm = function(article) {
    var newarticle = JSON.parse(JSON.stringify(article))
    this.state.articles.unshift(newarticle)
    this.setState({ isCreating: false })

  }.bind(this)

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

  isMine() {
    return api.id.toString() === this.props.policeStationId
  }


  render() {
    var articles = this.state.articles
    articles.reverse()
    return (
      <div>
        <Header as='h1'>
          Featured Crimes
        </Header>
        { this.isMine()
          ? (this.state.isCreating
            ? <FeaturedCrimeForm onSubmit={this.closeForm} article={{}} />
            : <Button fluid onClick={() => {this.setState({isCreating: true})}}>Add Featured Crime</Button>)
            : null
        }
        <Divider hidden/>
        {articles
          ? articles.map((article, i) => {
              return (
                <div key={article.id}>
                  <FeaturedInfo article={article} />
                  
                  <Divider hidden/>
                </div>    
              )
            })
          : <Header as='h3'>Loading...</Header>
        }
      </div>
    )
  }
}
