import React, { Component } from 'react'
import { Button, Header, Form, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import api from '../api.js'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    api.login(this.state.username, this.state.password)
      .done(() => {
        this.setState({ logged_in: api.auth && true })
      })
      .fail(data => {
        this.setState({ error: true })
      })
  }

  componentDidMount() {
    this.setState({ logged_in: api.auth && true })
  }

  render() {
    if (this.state.logged_in) {
      return <div>
        <Header as='h3'>Logged in.</Header>
        <Button as={Link} to={'/police-stations/' + api.id}>Go to your page</Button>
      </div>
    }
      return (
        <div style={{maxWidth: '300px'}}>
          <Header as='h1'>
            Log In
          </Header>
          <Form onSubmit={this.handleSubmit} error={this.state.error}>
            <Form.Input label='Username' name='username' onChange={this.handleChange} />
            <Form.Input label='Password' name='password' type='password' onChange={this.handleChange} />
            <Form.Button>Submit</Form.Button>
            <Message
              error
              content='Invalid username/password'
            />
          </Form>
        </div>
      )
  }
}
