import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Aside from './Aside';

const LayoutAside = ({ children }) => (
  <main>
    <Container>
      <Row>
        <Col md={8} lg={9} className="mb-4">
          {children}
        </Col>
        <Col md={4} lg={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  </main>
);

LayoutAside.propTypes = {
  children: PropTypes.element,
};

export default LayoutAside;
