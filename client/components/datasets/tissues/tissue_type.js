import React, { PropTypes } from 'react';

const TissueType = (props) => {
  return (
    <div className="container tissue-list">
      <div className="thumbnail">
          <h1>Adult Cells/Tissues</h1>
      </div>
      <div className="thumbnail">
          <h1>Cancer Cells</h1>
      </div>
      <div className="thumbnail">
          <h1>ES / iPS Cells</h1>
      </div>
      <div className="thumbnail">
          <h1>Fetal Cells/Tissues</h1>
      </div>
    </div>
  )
}

export default TissueType;
