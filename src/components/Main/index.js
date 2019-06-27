import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import About from './About';
import Help from './Help';
import News from './News';
import Contact from './Contact';
import Resources from './Resources';
import ResourcesCity from './Resources/ResourcesCity';
import ResourceList from './Resources/ResourcesList';
import Agency from './Agency';
import NotFound from './NotFound';

const Main = () => (
  <ErrorBoundary>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/help" component={Help} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />

      <Route path="/agencies" exact render={({ match }) => <Resources resourceType="agencies" matchObj={match} />} />
      <Route path="/clothing" exact render={({ match }) => <Resources resourceType="clothing" matchObj={match} />} />
      <Route path="/housing" exact render={({ match }) => <Resources resourceType="housing" matchObj={match} />} />
      <Route path="/meals" exact render={({ match }) => <Resources resourceType="meals" matchObj={match} />} />
      <Route path="/recovery" exact render={({ match }) => <Resources resourceType="recovery" matchObj={match} />} />
      <Route path="/shelter" exact render={({ match }) => <Resources resourceType="shelter" matchObj={match} />} />
      <Route path="/veteran" exact render={({ match }) => <Resources resourceType="veteran" matchObj={match} />} />

      <Route path="/agencies/:state" render={({ match }) => <ResourcesCity resourceType="agencies" matchObj={match} />} />
      <Route path="/clothing/:state" render={({ match }) => <ResourcesCity resourceType="clothing" matchObj={match} />} />
      <Route path="/housing/:state" render={({ match }) => <ResourcesCity resourceType="housing" matchObj={match} />} />
      <Route path="/meals/:state" render={({ match }) => <ResourcesCity resourceType="meals" matchObj={match} />} />
      <Route path="/recovery/:state" render={({ match }) => <ResourcesCity resourceType="recovery" matchObj={match} />} />
      <Route path="/shelter/:state" render={({ match }) => <ResourcesCity resourceType="shelter" matchObj={match} />} />
      <Route path="/veteran/:state" render={({ match }) => <ResourcesCity resourceType="veteran" matchObj={match} />} />

      <Route path="/agencies-list/:state/:city" render={({ match }) => <ResourceList resourceType="agency" matchObj={match} />} />
      <Route path="/clothing-list/:state/:city" render={({ match }) => <ResourceList resourceType="clothing" matchObj={match} />} />
      <Route path="/housing-list/:state/:city" render={({ match }) => <ResourceList resourceType="housing" matchObj={match} />} />
      <Route path="/meals-list/:state/:city" render={({ match }) => <ResourceList resourceType="meals" matchObj={match} />} />
      <Route path="/recovery-list/:state/:city" render={({ match }) => <ResourceList resourceType="recovery" matchObj={match} />} />
      <Route path="/shelter-list/:state/:city" render={({ match }) => <ResourceList resourceType="shelter" matchObj={match} />} />
      <Route path="/veteran-list/:state/:city" render={({ match }) => <ResourceList resourceType="veteran" matchObj={match} />} />

      <Route path="/agency-page/:aid" component={Agency} />
      <Route component={NotFound} />
    </Switch>
  </ErrorBoundary>
);

export default Main;
