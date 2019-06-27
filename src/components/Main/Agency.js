import React from 'react';

import LayoutAside from './LayoutAside';

import AgencyData from '../../data/agency.json';

const Agency = () => (
  <LayoutAside>
    <h1>{AgencyData.data.name}</h1>
    <p>{AgencyData.data.info}</p>
  </LayoutAside>
);

export default Agency;
