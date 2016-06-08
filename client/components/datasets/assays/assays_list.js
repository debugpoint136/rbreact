import React, { PropTypes, Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Assays } from '../../../../imports/api/assays';
import Assay from './assay';

class AssaysList  extends Component {

  renderRows() {
    return this.props.assays.map((assay) => (
        <Assay key={assay._id} assay={assay}/>
    ));
  }

  render () {
    return (
      <div className="container">
        <header>
          <h1>Assay Categories</h1>
        </header>

        <ul>
          { this.renderRows() }
        </ul>
      </div>
    );

  }
}

export default createContainer(() => {

  return { assays: Assays.find({}).fetch() };

}, AssaysList);
