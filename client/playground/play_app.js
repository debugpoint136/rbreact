import React, { PropTypes } from 'react';
import ExampleBarChart from './example_bar';
import ExampleBubbleChart from './example_bubble';
import ExampleDonutChart from './example_donut';
import ExampleCustomChart from './example_custom';

import Chart from './chart';

class PlayApp extends React.Component {
  render () {
    return (
        <div>
            <ExampleBarChart />
            <ExampleBubbleChart />
            <ExampleDonutChart />
            <ExampleCustomChart />
        </div>
    );
  }
}

export default PlayApp;
