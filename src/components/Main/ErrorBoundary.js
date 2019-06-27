import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Jumbotron,
} from 'react-bootstrap';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Container>
          <Jumbotron>
            <h2>Wow, we&apos;re so sorry</h2>
            <p>
              There was a problem with this page. A message has been sent to the site administrator and will be back up and running as soon as possible.
            </p>
          </Jumbotron>
        </Container>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
};
