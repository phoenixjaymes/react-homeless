import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LayoutAside from '../LayoutAside';
import ResourceListItem from './ResourceListItem';
import Loading from '../Loading';
import LoadingError from '../LoadingError';

class ResourceList extends Component {
  state = {
    loading: true,
    error: false,
    resourceList: [],
  }

  componentDidMount() {
    const { matchObj } = this.props;
    const { state, city } = matchObj.params;
    // const state = matchObj.params.state;
    // const city = matchObj.params.city;

    fetch(`http://phoenixjaymes.com/data/homeless/get-agencies.php?state=${state}&city=${city}`)
      .then(reponse => reponse.json())
      .then((responseData) => {
        this.setState({
          resourceList: responseData.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
        console.log('Error fetching and parsing data', error);
      });
  }

  renderLoading = () => <Loading />;

  renderError = () => <LoadingError />

  renderResources() {
    const { resourceList } = this.state;
    const { resourceType } = this.props;
    const resourceName = resourceType.charAt(0).toUpperCase() + resourceType.slice(1);
    const newResourceList = resourceList.map(listItem => (
      <ResourceListItem
        key={listItem.id}
        id={listItem.id}
        name={listItem.name}
        address={listItem.address}
        city={listItem.city}
        state={listItem.state}
        zip={listItem.zip}
        phone={listItem.phone}
        resources={listItem.resources}
      />
    ));

    if (resourceList.length !== 0) {
      return (
        <LayoutAside>
          {newResourceList}
        </LayoutAside>
      );
    }
    return (
      <LayoutAside>
        <h3>{resourceName}</h3>
        <p>Sorry, there are no resources for your choice. </p>
      </LayoutAside>
    );
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return this.renderLoading();
    }

    if (error === false && loading === false) {
      return this.renderResources();
    }

    return this.renderError();
  }
}

ResourceList.propTypes = {
  resourceType: PropTypes.string,
  matchObj: PropTypes.shape({
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.shape({
      state: PropTypes.string,
      city: PropTypes.string,
    }),
  }),
};

export default ResourceList;
