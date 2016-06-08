import React, { PropTypes } from 'react';
import ExampleBarChart from './example_bar';
import ExampleBubbleChart from './example_bubble';
import Chart from './chart';

class PlayApp extends React.Component {
  render () {
    return (
        <div>
            <ExampleBarChart />
            <ExampleBubbleChart />
        </div>
    );
  }
}

export default PlayApp;
