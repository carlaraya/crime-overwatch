import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import Logo from '../images/logo.png'
import api from '../api.js'

export default class Nav extends Component {
  render() {

    const navbar_items = [
      { name: 'Logged in as ' + api.username, link: '/police-stations/' + api.id, auth: true },
      { name: 'Stats', link: '/stats' },
      { name: 'Police Stations', link: '/police-stations'},
      { name: 'Featured Crimes', link: '/featured-crimes' },
      { name: 'Most Wanted', link: '/most-wanted' },
      { name: 'Log In', link: '/login', auth: false },
      { name: 'Log Out', link: '/logout', auth: true },
    ]
    return (
      <Menu borderless attached stackable>
        <Menu.Item as={Link} to='/' header fitted='vertically'>
          <Image src={Logo} size='mini' />
          PNP Crime Overwatch
        </Menu.Item>
        {navbar_items.map((item) => {
          if (item.auth === undefined || (item.auth === true && api.auth) || (item.auth === false && !api.auth)) {
            return <Menu.Item as={Link} to={item.link} name={item.name} key={item.name} />
          } else {
            return null
          }
        })}
      </Menu>
    )
  }
}
