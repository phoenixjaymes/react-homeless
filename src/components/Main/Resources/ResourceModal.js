import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Modal,
} from 'react-bootstrap';

const ResourceModal = ({
  isModalShown, handleClose, name, resourceInfo,
}) => (
  <Modal centered show={isModalShown} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{name}</Modal.Title>
    </Modal.Header>

    <Modal.Body className="text-center">{resourceInfo}</Modal.Body>

    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

ResourceModal.propTypes = {
  isModalShown: PropTypes.bool,
  name: PropTypes.string,
  resourceInfo: PropTypes.string,
  handleClose: PropTypes.func,
};

export default ResourceModal;
