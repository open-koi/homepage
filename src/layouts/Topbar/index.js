import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { TopbarContainer } from "./style";

function Topbar() {
  return (
    <TopbarContainer collapseOnSelect expand="md" sticky="top">
      <Navbar.Brand target="_blank" href="https://beta.keytango.io/">
        {/* <Image src={Logo} preview={false} /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <i className="fas fa-bars"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {/* <Link to="/convert">Convert</Link> */}
          {/* <Link to="#">Discover</Link> */}
          {/* <Link to="#">Learn</Link> */}
          {/* <Link to="#" className='btn-profile'>My Profile</Link> */}
        </Nav>
        {/* <Nav>
          <Link href="#deets">More deets</Link>
        </Nav> */}
      </Navbar.Collapse>
    </TopbarContainer>
  );
}

export default Topbar;
