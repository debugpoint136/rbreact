import React, { Component } from 'react';
import AddTissue from './add_tissue';
import TissuesList from './tissues_list';
import TissueType from './tissue_type';

class Tissues extends Component {
  render () {
    return (
      <div>
        <TissuesList />
      </div>
    );
  }
}

export default Tissues;
