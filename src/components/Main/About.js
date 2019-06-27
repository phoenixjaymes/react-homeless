import React from 'react';
import { Link } from 'react-router-dom';

import LayoutAside from './LayoutAside';

const About = () => (
  <LayoutAside>
    <h1>About Homeless Needs</h1>
    <p>Having been homeless myself, I know what it&apos;s like to be on the streets and not know what resources are offered in the city. My goal isn&apos;t so much to re-create what&apos;s already out there, but to improve upon it. I also want to provide a national resource, so that people don&apos;t have to leave where they live or grew up just to get off of the streets. But if they do need to leave their area, they will have a list of resources to help them get started in their new city.</p>

    <h2>The Mission</h2>
    <p>One of the problems we have is people not being able to find resources where they live. What end up happening is that when people can&apos;t find resources where they live is that they go to big cites. Leaving behind their friends and family to find help. </p>
    <p>One of the problems we have is people not being able to find resources where they live. What end up happening is that when people can&apos;t find resources where they live is that they go to big cites. Leaving behind their friends and family to find help. </p>
    <p>When you&apos;re on the streets, you may need to know how to get by. This site is here to help you find the resources that you need to survive. Food, shelter, clothing and all the other things that you might need. If you think that there is something that I have missed feel free to use the <Link to="/contact">contact</Link> form and let me know what other services that I can add to the site or other ways that this site can be of help.</p>
  </LayoutAside>
);

export default About;
