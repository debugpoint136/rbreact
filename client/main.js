import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Browser from './components/browser/browser_main';
import Datasets from './components/datasets/datasets_main';
import Tissues from './components/datasets/tissues/main';
import Repeats from './components/repeats/repeats_main';

// Assay Categories
import AssayList from './components/datasets/assays/assays_list';

// Test components
import TaskList from './components/tasks/task_list';

// Playground
import PlayApp from './playground/play_app';

// Collections


const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={App} >
      <Route path="browse" component={ Browser }/>
      <Route path="data" component={ Datasets }/>
      <Route path="data/tissues" component={ Tissues }/>
      <Route path="repeats" component={ Repeats }/>
      <Route path="tasks" component={ TaskList }/>
      <Route path="assays" component={ AssayList }/>
      <Route path="play" component={ PlayApp }/>
    </Route>
  </Router>
);


Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});

// Test - Playground
import '../imports/api/setup';
