import React, { PropTypes } from 'react';
import Chart from './chart';

class ExampleBubbleChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                children: [
                    { name: "Alaa", value: 1 },
                    { name: "Zaid", value: 1 },
                    { name: "Kareem", value: 2 },
                    { name: "Mahmoud", value: 1 },
                    { name: "Tariq", value: 1 },
                    { name: "Shareef", value: 1 },
                    { name: "Tom", value: 41 },
                    { name: "Forest", value: 2 },
                    { name: "John", value: 84 },
                    { name: "Alex", value: 11 },
                    { name: "Donald", value: 7 },
                    { name: "Mark", value: 29 },
                    { name: "Charles", value: 20 },
                    { name: "Quincy", value: 5 },
                    { name: "Alvan", value: 1 },
                    { name: "Don", value: 32 },
                    { name: "Hassan", value: 2 },
                    { name: "Jordan", value: 8 },
                    { name: "Michael", value: 32 },
                    { name: "Steven", value: 5 },
                    { name: "Rafael", value: 2 },
                    { name: "Rick", value: 12 },
                ]
            }
        }
    }

    render () {
        return (
            <div>
                <h2>Bubble Chart</h2>
                <Chart
                    type={"bubble"}
                    diameter={500}
                    showTooltips={true}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default ExampleBubbleChart;
