import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Layout = ({ children }) => (
  <main style={{ backgroundColor: '#bbb' }}>
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </main>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
