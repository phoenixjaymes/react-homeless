import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Button,
} from 'react-bootstrap';

const CoverageItem = ({ name, path }) => {
  const nameCapitalized = name[0].toUpperCase() + name.substr(1);

  return (
    <li>
      <Button as={Link} to={path} variant="coverage">
        {nameCapitalized}
      </Button>
    </li>
  );
};

CoverageItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default CoverageItem;
