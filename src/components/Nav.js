import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import Logo from '../images/logo.svg'

export default class Nav extends Component {
  render() {
    const navbar_items = [
      { name: 'Stats', link: '/stats' },
      { name: 'Precincts', link: '/precincts'},
      { name: 'Featured Crimes', link: '/featured-crimes' },
      { name: 'Most Wanted', link: '/most-wanted' },
      { name: 'Log In', link: '/login' }
    ]
    return (
      <Menu borderless attached stackable>
        <Menu.Item as={Link} to='/' header fitted='vertically'>
          <Image src={Logo} height='48px' />
          PNP Crime Overwatch
        </Menu.Item>
        {navbar_items.map((item) =>
          <Menu.Item as={Link} to={item.link} name={item.name} key={item.name}>
          </Menu.Item>
        )}
      </Menu>
    )
  }
}
