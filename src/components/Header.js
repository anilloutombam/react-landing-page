import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import '../styles/header.scss'
function Header() {
  return (
    <div className="nav-container" >
      <Navbar expand="lg" >
        <Container fluid>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" >
          <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav>
            <Nav.Link href="#deets" className="custom-nav-items">Dev Challenges</Nav.Link>
            <Nav.Link href="#deets" className="custom-nav-items" >Articles</Nav.Link>
            <Nav.Link href="#deets" className="custom-nav-items" >Workshops</Nav.Link>
            <Nav.Link href="#deets" className="custom-nav-button">Dev Sign In </Nav.Link>

         
          </Nav>

          {/* </Navbar.Collapse>

          </Navbar.Toggle> */}
    
  
    


        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
