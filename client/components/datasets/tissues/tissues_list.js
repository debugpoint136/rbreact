import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { TissuesDB } from '../../../../imports/collections/tissues';
import TissueItem from './tissue_item';

class TissuesList extends Component {
  renderRows() {
    return this.props.tissues.map(tissue => {
      return (
        <TissueItem key={tissue._id} {...tissue}/>
      );
    });
  }

  render () {
    return (
      <div>
        <ul>
          { this.renderRows() }
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {

  return { tissues: TissuesDB.find({}).fetch() };

}, TissuesList);
