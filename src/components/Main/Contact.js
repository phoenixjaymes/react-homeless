import React from 'react';

import {
  Form,
  Button,
} from 'react-bootstrap';

import LayoutAside from './LayoutAside';

const Contact = () => (
  <LayoutAside>
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
          We&apos;ll never share your bame with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </LayoutAside>
);

export default Contact;
