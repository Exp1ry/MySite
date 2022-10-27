import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBarComp = () => {
  return (
    <Navbar expand="sm" style={{ height: "45px", backgroundColor: "#0a71c6" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-dark d-flex mx-auto">
          <Nav.Link href="https://www.linkedin.com/in/zaidwidyan/">
            <i class="fa-brands fa-linkedin" style={{ color: "white" }}></i>
          </Nav.Link>
          <Nav.Link className="ms-5" href="https://github.com/Exp1ry">
            <i class="fa-brands fa-github" style={{ color: "white" }}></i>
          </Nav.Link>
          <Nav.Link className="ms-5">
            <i class="fa-brands fa-twitter" style={{ color: "white" }}></i>
          </Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBarComp
