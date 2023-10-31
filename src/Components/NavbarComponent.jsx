import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "../data/index";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">Project XS-1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((link) => {
                return (
                  <div key={link.id}>
                    <Nav.Link href="">{link.text}</Nav.Link>
                  </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
