import React, { PropTypes } from 'react';
import SomeCustomChart from './some_custom_chart';
import Chart from './chart';

class ExampleCustomChart extends React.Component {
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
        };
    }
    render() {
        return (
            <div>
                <h2>Custom Chart</h2>
                <Chart
                    type={"custom"}
                    customChart={SomeCustomChart}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default ExampleCustomChart;
