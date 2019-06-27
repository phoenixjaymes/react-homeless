import React from 'react';
import { Link } from 'react-router-dom';

import LayoutAside from './LayoutAside';

const About = () => (
  <LayoutAside>
    <h1>404 Not Found</h1>
    <p>Sorry, we&apos;re unable to find the page you are looking for please try starting again from the home page. Have a nice day? </p>
    <p><Link to="/">Home</Link></p>
  </LayoutAside>
);

export default About;
