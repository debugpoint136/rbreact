import React, { PropTypes } from 'react';


class Assay extends React.Component {

  onToggle(_id) {
    const selected = !this.props.assay.selected;
    Meteor.call('assays.update', _id, selected );
  }



  render () {
    return (
      <div onClick={() => { this.onToggle( this.props.assay._id);}}>
        <li>
          <input
            type="checkbox"
            readOnly
            checked={ this.props.assay.selected }
          />
        <span className="text">{ this.props.assay.text }</span>
        </li>
     </div>
    );
  }
}

Assay.propTypes = {
  assay: PropTypes.object.isRequired,
};

export default Assay;
