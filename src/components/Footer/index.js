import React from 'react';

import {
  Container,
  Navbar,
} from 'react-bootstrap';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Navbar as="footer" fixed="bottom" expand="lg" variant="none" bg="hmlss-blue">
      <Container className="justify-content-center">
        <Navbar.Text>
          {`\u00A9 ${date} Homeless Needs`}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
