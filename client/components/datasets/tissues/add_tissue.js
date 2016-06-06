import React, { Component } from 'react';

class AddTissue extends Component {
  handleSubmit(e) {
    e.preventDefault();
    Meteor.call('tissues.insert', this.refs.tissue_input.value);
    this.refs.tissue_input.value = '';
  }

  render () {
    return(
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <div className="form-group">
          <input ref="tissue_input" className="form-control new-task" placeholder="Blood"/>
        </div>
        <button className="btn btn-primary">Add Tissue</button>
      </form>
    );
  }
}

export default AddTissue;
