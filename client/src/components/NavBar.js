import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import React, { Component } from 'react';

export default class Navigation extends Component{
  render(){
    return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Australian Weather Trends</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

      <Nav.Link href="/graph">Graph</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>);
  }

}
