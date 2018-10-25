import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
} from 'reactstrap';

import Logo from './logo';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  close() {
    this.setState({
      isOpen: false,
    });
  }
  render() {
    return (
      <Navbar dark expand="sm" className="fixed-top" style={{ backgroundColor: '#000' }}>
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={this.close} style={{ padding: 0 }}>
            <Logo />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <span className="navbar-text text-center" style={{ color: '#fff', fontSize: '14px' }}>
                  1801 Wolf Rd, Hillside, IL <br />
                  (708) 593-3939
                </span>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
