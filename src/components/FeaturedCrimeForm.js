import React, { Component } from 'react'
import { Header, Form } from 'semantic-ui-react'
import api from '../api.js'

export default class FeaturedCrimeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      crime_type_id: null,
      content: ''
    }
  }

  handleChange = (e, { name, value }) => {
    console.log(e)
    if (name) this.setState({ [name]: value })
    else this.setState({ crime_type_id: value })
  }
  handleSubmit = () => {
    if (this.props.article.title) {
      api.updateFeaturedCrime(this.state, this.props.article.id).done(x => {this.setState(x); this.props.onSubmit()})
    } else {
      api.createFeaturedCrime(this.state).done(x => {this.props.onSubmit()})
    }
    
  }

  componentDidMount() {
    this.setState(this.props.article)
  }

  render() {
    const options = api.crimeTypes.map((x, i) => {
      return { key: i+1, text: x, value: i+1 }
    })
    const article = this.props.article
    return (
      <Form onSubmit={this.handleSubmit}>
        {/*<Header size='small'>Featured Crime Form</Header>*/}
        <Form.Group widths='equal'>
          <Form.Input placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange} />
          <Form.Select options={options} placeholder='Crime Type' value={this.state.crime_type_id} onChange={this.handleChange} />
        </Form.Group>
        <Form.TextArea placeholder='Content' name='content' value={this.state.content} onChange={this.handleChange}/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
