import React, { PropTypes } from 'react';
import Chart from './chart';

class ExampleBarChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                { xValue: "React", yValue: 2 },
                { xValue: "Relay", yValue: 12 },
                { xValue: "GraphQL", yValue: 5 },
                { xValue: "Radium", yValue: 7 },
                { xValue: "Babel", yValue: 5 },
            ]
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: [
                    { xValue: "React", yValue: 2 },
                    { xValue: "Relay", yValue: 8 },
                    { xValue: "GraphQL", yValue: 15 },
                    { xValue: "Radium", yValue: 27 },
                    { xValue: "Babel", yValue: 5 },
                ]
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                <h2>Bar Chart</h2>
                <Chart
                    type={"bar"}
                    width={500}
                    height={500}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    showTooltips={true}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default ExampleBarChart;
