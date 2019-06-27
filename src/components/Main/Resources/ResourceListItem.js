import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import ResourceModal from './ResourceModal';

class ResourceListItem extends Component {
  state = {
    isModalShown: false,
    resourceInfo: '',
  }

  handleOpen = (e) => {
    const { resources } = this.props;
    const id = e.target.getAttribute('id');
    this.setState({
      isModalShown: true,
      resourceInfo: resources[id].info,
    });
  }

  handleClose = () => {
    this.setState({ isModalShown: false });
  }

  render() {
    const {
      id, name, address, city, state, zip, phone, resources,
    } = this.props;
    const { isModalShown, resourceInfo } = this.state;
    const resourceOptions = resources.map((item, index) => (
      <Button key={index} variant="resource" id={index} onClick={this.handleOpen}>{item.type}</Button>
    ));

    return (
      <div className="mb-4">
        <h3><Link to={`/agency-page/${id}`}>{name}</Link></h3>
        <p>
          {address}
          <br />
          {city}
          ,
          {state}
          {zip}
          <br />
          {phone}
        </p>
        <div>
          {resourceOptions}
        </div>
        <ResourceModal
          isModalShown={isModalShown}
          name={name}
          resourceInfo={resourceInfo}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

ResourceListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string,
  phone: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(PropTypes.shape({
    state: PropTypes.string,
    zip: PropTypes.string,
  })).isRequired,
};

export default ResourceListItem;
