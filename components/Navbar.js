import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBarComp = () => {
  return (
    <Navbar expand="sm" style={{ height: "55px", backgroundColor: "#0a71c6" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-dark d-flex">
          <Nav.Link>
            <i class="fa-brands fa-linkedin" style={{ color: "white" }}></i>
          </Nav.Link>
          <Nav.Link className="ms-5">
            <i class="fa-brands fa-github" style={{ color: "white" }}></i>
          </Nav.Link>
          <Nav.Link className="ms-5">
            <i class="fa-brands fa-twitter" style={{ color: "white" }}></i>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="/" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="/projects" className="text-white">
              Projects
            </Nav.Link>

            <Nav.Link href="#link" className="text-white ">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComp
