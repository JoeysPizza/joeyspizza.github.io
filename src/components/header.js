import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavItem } from 'reactstrap'

import Logo from './logo'

export default class Header extends Component {
  render() {
    return (
      <Navbar
        dark
        expand="sm"
        className="fixed-top"
        style={{ backgroundColor: '#000' }}
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            onClick={this.close}
            style={{ paddingBottom: 0 }}
          >
            <Logo />
          </Link>
          <Nav navbar>
            <NavItem>
              <span
                className="navbar-text text-center"
                style={{
                  color: '#fff',
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  padding: 0,
                }}
              >
                1801 Wolf Rd, Hillside, IL <br />
                (708) 593-3939
              </span>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
}
