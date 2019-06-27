import React from 'react';
import { Link } from 'react-router-dom';

import LayoutAside from './LayoutAside';

const Help = () => (
  <LayoutAside>
    <h1>How To Help Provide Homeless Resources</h1>
    <p>There are many ways to help the homeless below are just a few things that you can do to help.</p>
    <ul>
      <li>Use the <Link to="/contact">contact</Link> form to leave a comment, make category suggestions or make suggestions about features you would like to see on the site.</li>
      <li><strong>Volunteer</strong> - Another way that you can help is to donate your time by volunteering. Contact agencies that you see listed and see how you can volunteer.</li>
      <li><strong>Donate</strong> - Most of the agencies listed accept donations. Feel free to go to their websites or give them a call to find out how you can donate.</li>
      <li>Another way to help is by helping me to keep this site up and running. Feel free to use the donate button below to donate to this site.</li>
    </ul>

    <h2>Things you can donate</h2>
    <ul>
      <li>Hygiene Kits - Toothbrush, toothpaste, soap, comb, deodorant, and sanitary products for women. Travel sizes are best, all put into a resealable bag. Shaving cream, disposable razors, dental floss, and bandaids are also helpful.</li>
      <li>Warm hats, gloves, scarves, and coats for cold weather.</li>
      <li>Clean jackets, shirts, pants, socks and underwear.</li>
      <li>Shelters usually need blankets.</li>
    </ul>

    <p>If you are unsure what a shelter needs, just give them a call.</p>
  </LayoutAside>
);

export default Help;
