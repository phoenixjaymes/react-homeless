import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
} from 'react-bootstrap';

export default class AsideErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static propTypes = {
    children: PropTypes.element,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <aside>
          <Container>
            <h2>News</h2>
            <Row>
              <p>Sorry, we&apos;re unable to retrieve the news right now.</p>
            </Row>
          </Container>
        </aside>
      );
    }

    return children;
  }
}
