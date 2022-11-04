import Link from "next/link"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBarComp = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      style={{ backgroundColor: "#0a71c6" }}
      variant="dark"
      className="navHeight"
    >
      <Container>
        <div className="d-flex">
          <Nav.Link
            href="https://www.linkedin.com/in/zaidwidyan/"
            className="mx-2 socialCenter"
          >
            <i class="fa-brands fa-linkedin " style={{ color: "white" }}></i>
          </Nav.Link>
          <Nav.Link
            className="mx-2 socialCenter"
            href="https://github.com/Exp1ry"
          >
            <i class="fa-brands fa-github" style={{ color: "white" }}></i>
          </Nav.Link>
          <Nav.Link className="mx-2 socialCenter" href="#features">
            <i class="fa-brands fa-twitter" style={{ color: "white" }}></i>
          </Nav.Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <span
                style={{ cursor: "pointer" }}
                className="text-white centerLink text-center"
              >
                <strong>Home</strong>
              </span>
            </Link>
          </Nav>
          <Nav>
            <Link href={"/projects"}>
              <span
                style={{ cursor: "pointer" }}
                className="text-white text-center centerLink"
              >
                <strong>Projects</strong>
              </span>
            </Link>
            <Link href="/case-studies">
              <span
                style={{ cursor: "pointer" }}
                className="text-white text-center centerLink"
              >
                <strong>Case Studies</strong>
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComp

// <Navbar expand="sm" style={{ height: "45px", backgroundColor: "#0a71c6" }}>
//   <Container>
//     <Navbar.Brand href="#home" className="text-dark d-flex mx-auto ">
//       <Nav.Link
//         className="mx-3"
//         href="https://www.linkedin.com/in/zaidwidyan/"
//       >
//         <i class="fa-brands fa-linkedin" style={{ color: "white" }}></i>
//       </Nav.Link>
//       <Nav.Link className="" href="https://github.com/Exp1ry">
//         <i class="fa-brands fa-github" style={{ color: "white" }}></i>
//       </Nav.Link>
//       <Nav.Link className="mx-3">
//         <i class="fa-brands fa-twitter" style={{ color: "white" }}></i>
//       </Nav.Link>
//       <Link href="/">
//         <span className="text-white mx-2">Home</span>
//       </Link>
//       <Link href="/projects">
//         <span className="text-white mx-2">Projects</span>
//       </Link>
//       <Link href="/case-studies">
//         <span className="text-white mx-2">Case Studies</span>
//       </Link>
//     </Navbar.Brand>
//   </Container>
// </Navbar>
