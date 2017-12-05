import React, { Component } from 'react'
import { Header, Form } from 'semantic-ui-react'
import api from '../api.js'

export default class MostWantedForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      crime_type_id: null,
      exact_crime: '',
      reward: '',
      additional_info: ''
    }
  }

  handleChange = (e, { name, value }) => {
    if (name) this.setState({ [name]: value })
    else this.setState({ crime_type_id: value })
  }
  handleSubmit = () => {
    if (this.props.mw.name) {
      api.updateMostWanted(this.state, this.props.mw.id).done(x => {this.setState(x); this.props.onSubmit(x)})
    } else {
      api.createMostWanted(this.state).done(x => {this.props.onSubmit(x)})
    }
    
  }

  componentDidMount() {
    this.setState(this.props.mw)
  }

  render() {
    const options = api.crimeTypes.map((x, i) => {
      return { key: i+1, text: x, value: i+1 }
    })
    const mw = this.props.mw
    return (
      <Form onSubmit={this.handleSubmit}>
        {/*<Header size='small'>Featured Crime Form</Header>*/}
        <Form.Group widths='equal'>
          <Form.Input placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} />
          <Form.Select options={options} placeholder='Crime Type' value={this.state.crime_type_id} onChange={this.handleChange} />
        </Form.Group>
        <Form.Input placeholder='Exact Crime' name='exact_crime' value={this.state.exact_crime} onChange={this.handleChange} />
        <Form.Input placeholder='Reward' name='reward' value={this.state.reward} onChange={this.handleChange} />
        <Form.TextArea placeholder='Additional Info' name='additional_info' value={this.state.additional_info} onChange={this.handleChange}/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
