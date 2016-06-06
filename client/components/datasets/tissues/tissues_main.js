import React, { Component } from 'react';
import AddTissue from './add_tissue';
import TissuesList from './tissues_list';

class Tissues extends Component {
  render () {
    return (
      <div>
        Tissues Main
        <AddTissue />
        <TissuesList />
      </div>
    );
  }
}

export default Tissues;
