import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import {navigationLinks} from '../helpers/navigationLinks'
import '../styles/navigation.css'


function Navigation() {
  return (
    <div id='navbar'>
      <Container className='navigation__container'>  
        <Navbar expand='lg' variant='dark'>
            <Navbar.Brand href='#home'>Navid Mani Asl</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  style={{justifyContent: 'flex-end'}}>
              <Nav>
              {navigationLinks.map(link =>(
                <Nav.Link href={link.ref} key={link.name}>{link.name}</Nav.Link>
              ))}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>  
    </div>
  )
}

export default Navigation