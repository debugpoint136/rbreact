import React, { Component } from 'react';

class TissueItem extends Component {

  onToggle(_id) {
    const completed = !this.props.completed;
    Meteor.call('tissues.update', _id, completed );
  }

  render () {
     var { _id, text, completed} = this.props;

    return (
      <div onClick={() => { this.onToggle( _id);}}>
        <li>
          <input type="checkbox" checked={ completed }/>
          <span className="li-text">{ text }</span>

        </li>
      </div>
    );
  }
}

export default TissueItem;
