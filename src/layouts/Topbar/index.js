import { Logo } from "assets/images";
import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TopbarContainer } from "./style";

function Topbar() {
  return (
    <TopbarContainer collapseOnSelect expand="md" fixed="top">
      <Navbar.Brand target="_blank" href="https://beta.keytango.io/">
        <Image src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <i className="fas fa-bars"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/convert">News</Link>
          <Link to="#">Ecosystem</Link>
          <Link to="#" className='btn-download'>Download</Link>
        </Nav>
      </Navbar.Collapse>
    </TopbarContainer>
  );
}

export default Topbar;
