import React, { PropTypes } from 'react';
import Chart from './chart';

class ExampleDonutChart extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            data: {
                "React": 2,
                "Relay": 12,
                "GraphQL": 5,
                "Radium": 7,
                "Babel": 5,
            }
  }
}
  render () {
    return (
        <div>
            <h2>Donut Chart</h2>
            <Chart
                type={"pie"}
                width={300}
                height={300}
                innerRadius={100}
                showTooltips={true}
                showLegend={true}
                data={this.state.data}
            />
        </div>
    );
  }
}

export default ExampleDonutChart;
