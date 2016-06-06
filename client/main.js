import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Browser from './components/browser/browser_main';
import Datasets from './components/datasets/datasets_main';
import Tissues from './components/datasets/tissues/tissues_main';
import Repeats from './components/repeats/repeats_main';

// Collections
import { TissuesDB } from '../imports/collections/tissues';

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={App} >
      <Route path="browse" component={ Browser }/>
      <Route path="data" component={ Datasets }/>
      <Route path="data/tissues" component={ Tissues }/>
      <Route path="repeats" component={ Repeats }/>
    </Route>
  </Router>
);


Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
