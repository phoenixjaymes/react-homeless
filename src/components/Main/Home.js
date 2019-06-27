import React from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  Container,
  Jumbotron,
  Button,
} from 'react-bootstrap';

import Coverage from './Coverage';
import Banner from './Banner';

const Home = () => (
  <main>
    <Container>
      <Jumbotron className="hero">
        <h1>Homeless Resources and Services</h1>
        <p className="mb-5">
          A national homeless resources and services database.
          <br />
          Helping you find the resources and services you need in the community that you live in.
        </p>
        <p className="mb-5 text-right">
          <Button variant="jumbo"><Link to="/shelter">Find Shelter</Link></Button>
        </p>
      </Jumbotron>

      <Banner />

      <Coverage resourceType="shelter" />

    </Container>
  </main>
);


export default Home;
