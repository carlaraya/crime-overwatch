import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'
import Logo from '../images/logo.png'

export default class Nav extends Component {
  render() {
    return (
      <div>
          <Image src={Logo} size='medium' centered/>
          <Header as='h1' textAlign='center'>
            PNP Crime Overwatch
            <Header.Subheader>
              the freely-available crime information hub, provided by the Philippine National Police
            </Header.Subheader>
          </Header>
      </div>
    )
  }
}
