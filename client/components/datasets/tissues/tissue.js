import React, { Component } from 'react';

class TissueItem extends Component {

  onToggle(_id) {
    const selected = !this.props.selected;
    Meteor.call('tissues.update', _id, selected );
  }

  render () {
     var { _id, text, selected} = this.props;

    return (
      <div onClick={() => { this.onToggle( _id);}}>
        <li>
          <input type="checkbox" readOnly checked={ selected }/>
          <span className="text">{ text }</span>
        </li>
      </div>
    );
  }
}

export default TissueItem;
