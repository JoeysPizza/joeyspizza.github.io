import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'

import Logo from './logo'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar
        dark
        expand="md"
        className="fixed-top"
        style={{ backgroundColor: '#000' }}
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            onClick={this.close}
            style={{ paddingBottom: '3px' }}
          >
            <Logo />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/menu/" className="nav-link">
                  Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/catering-menu/" className="nav-link">
                  Catering Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact/" className="nav-link">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
