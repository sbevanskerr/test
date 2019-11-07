import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        className='mint-cool-30v-bg'
        collapseOnSelect
        expand='sm'
        variant='dark'
      >
        <Navbar.Brand href='#home'>myGNV Resource Directory</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/' className='navbar-link'>
              Home
            </Link>
            <Link to='/search' className='navbar-link'>
              Search
            </Link>
            <Link to='/admin' className='navbar-link'>
              Admin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
