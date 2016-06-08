import React, { Component } from 'react';

class AddTissue extends Component {
  handleSubmit(e) {
    e.preventDefault();
    Meteor.call('tissues.insert', this.refs.tissue_input.value);
    this.refs.tissue_input.value = '';
  }

  render () {
    return(
      <div className="container">
        <header>
          <h1>Tissues</h1>
        </header>

        <form className="form-inline" onSubmit={ this.handleSubmit.bind(this) }>
          <div className="form-group">
            <input ref="tissue_input" className="form-control new-task" placeholder="Blood"/>
            <button type="submit" className="btn btn-primary">Add Tissue</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTissue;
