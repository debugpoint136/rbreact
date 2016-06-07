import React, { PropTypes } from 'react'

class Assay extends React.Component {
  render () {
    return (
      <li>
        <input
          type="checkbox"
          readOnly
        />
      <span className="text">{this.props.assay.text}</span>
      </li>
    );
  }
}

Assay.propTypes = {
  assay: PropTypes.object.isRequired,
};

export default Assay;
