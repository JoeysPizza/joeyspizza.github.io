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
        style={{ backgroundColor: '#000', height: '70px' }}
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
                }}
              >
                <span>1801 Wolf Rd, Hillside, IL</span>
                <br />
                <a href="tel:+17085933939">(708) 593-3939</a>
              </span>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
}
