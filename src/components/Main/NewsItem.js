import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ img, caption }) => (
  <figure>
    <img src={`${img}`} alt="News Item" style={{ maxWidth: '100%' }} />
    <figcaption>{caption}</figcaption>
  </figure>
);

NewsItem.propTypes = {
  img: PropTypes.string,
  caption: PropTypes.string,
};

export default NewsItem;
