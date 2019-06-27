import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CoverageItem from './CoverageItem';
import Loading from '../Loading';
import LoadingError from '../LoadingError';

import '../../../css/coverage.css';

class Coverage extends Component {
  state = {
    loading: true,
    error: false,
    names: [],
  }

  componentDidMount() {
    const { state, city } = this.props;
    let path;
    if (state === undefined) {
      path = 'http://phoenixjaymes.com/data/homeless/get-states.php';
    } else if (state !== undefined && city === undefined) {
      path = `http://phoenixjaymes.com/data/homeless/get-cities.php?state=${state}`;
    }

    fetch(path)
      .then(reponse => reponse.json())
      .then((responseData) => {
        this.setState({
          names: responseData,
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

  renderCoverage= () => {
    const { resourceType, state, city } = this.props;
    const { names } = this.state;
    const heading = resourceType[0].toUpperCase() + resourceType.substr(1);
    let coverage = [];

    if (state === undefined) {
      coverage = names.data.map(location => (
        <CoverageItem key={location.id} name={location.name} path={`/${resourceType}/${location.path}`} />
      ));
    } else if (state !== undefined && city === undefined) {
      coverage = names.data.map(location => (
        <CoverageItem key={location.id} name={location.name} path={`/${resourceType}-list/${state}/${location.path}`} />
      ));
    }

    return (
      <div className="coverage">
        <h2 className="mb-3">{heading}</h2>
        <ul className="p-0">
          {coverage}
        </ul>
      </div>
    );
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return this.renderLoading();
    }

    if (error === false && loading === false) {
      return this.renderCoverage();
    }

    return this.renderError();
  }
}

Coverage.propTypes = {
  state: PropTypes.string,
  city: PropTypes.string,
  resourceType: PropTypes.string,
};

export default Coverage;
