import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "antd";
import { FooterContainer } from "./style";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <h2 className="footer-title text-white">Run a node.</h2>
        <h3 className="text-white">
          Join the network, and help us preserve the best of human knowledge.
        </h3>
        <div className="footer-subscribe">
          <h6>Stay up to date</h6>
          <p>Email address</p>
        </div>
        <div className="footer-links">
          <Row>
            <Col flex={4}>
              <h6>Company</h6>
            </Col>
            <Col flex={3}>
              <h6>Get Involved</h6>
            </Col>
            <Col flex={3}>
              <h6>Get In Touch</h6>
            </Col>
          </Row>
        </div>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
