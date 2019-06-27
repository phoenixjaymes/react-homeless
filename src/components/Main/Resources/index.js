import React from 'react';
import PropTypes from 'prop-types';

import LayoutAside from '../LayoutAside';
import Coverage from '../Coverage';


const Resources = ({ resourceType, matchObj }) => {
  const text = 'Free or low cost clothing resources for the homless and those that are in need. Most of the agencies listed offer free clothing of all types. Also most of the agencies are in need of clothing so if you want to donate clothing please call one of the agencies and find out how. If you simply need to do laundry you can find those resources on the laundry page.';
  let heading = '';

  if (resourceType === 'agencies') {
    heading = 'Agencies That Provide Homeless Resources';
  } else if (resourceType === 'clothing') {
    heading = 'Free Clothing Resources';
  } else if (resourceType === 'housing') {
    heading = 'Transitional Housing';
  } else if (resourceType === 'meals') {
    heading = 'Free Meals and Soup Kitchens';
  } else if (resourceType === 'recovery') {
    heading = 'Recovery Resources';
  } else if (resourceType === 'shelter') {
    heading = 'Emergency Homeless Shelters';
  } else if (resourceType === 'veteran') {
    heading = 'Veteran Resources';
  }

  return (
    <LayoutAside>
      <h1>{heading}</h1>
      <p>{text}</p>
      <Coverage
        resourceType={resourceType}
        state={matchObj.params.state}
        city={matchObj.params.city}
      />
    </LayoutAside>
  );
};

Resources.propTypes = {
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

export default Resources;
