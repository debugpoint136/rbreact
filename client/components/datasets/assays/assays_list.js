import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Assay from './assay';
import { assayDict } from '../../../../imports/dictionary/assays';

class AssayList  extends Component {

  renderAssays() {
    return assayDict.map((assay) => (
      <Assay key={assay._id} assay={assay} />
    ));
  }

  render () {
    return (
      <div className="container">
        <header>
          <h1>Assay Categories</h1>
        </header>

        <ul>
          { this.renderAssays() }
        </ul>
      </div>
    );

  }
}

export default AssayList;
