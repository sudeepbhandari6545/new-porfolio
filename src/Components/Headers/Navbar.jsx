import React from 'react'
import { Col, Container, Row, Navbar, Nav, Image } from 'react-bootstrap'
import Sidebar from './Sidebar'

//style
import './Navbar.css'

const NavbarSection = () => {
  return (
    <>
      <Navbar bg="" expand="lg" className="m-auto navbar_main">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="https://www.sudeepbhandari1.com.np/Image/logo.png"
              className="logo_image"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar_toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" className="nav_item">
                Home
              </Nav.Link>
              <Nav.Link href="#home " className="nav_item">
                about me
              </Nav.Link>
              <Nav.Link href="#home" className="nav_item">
                skill
              </Nav.Link>
              <Nav.Link href="#home" className="nav_item">
                experience
              </Nav.Link>
              <Nav.Link href="#home" className="nav_item">
                project
              </Nav.Link>
              <Nav.Link href="#home" className="nav_item">
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarSection
