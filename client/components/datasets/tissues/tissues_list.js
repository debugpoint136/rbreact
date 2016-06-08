import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Tissues } from '../../../../imports/api/tissues';
import Tissue from './tissue';
import ReactDOM from 'react-dom';

class TissuesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tissueType: '',
      selected: ''
    };
  }

  toggleTissueType(filter) {
    this.setState({
      tissueType: filter,
      selected: filter
    });
  }

  isActive(value){
    return 'thumbnail '+((value===this.state.selected) ?'selected-tissue':'');
  }

  showAll() {
    this.setState({
      tissueType: '',
      selected: ''
    });
  }

  renderRows() {
    let filteredTasks = this.props.tissues;
    if (this.state.tissueType) {
      filteredTasks = filteredTasks.filter(task => task.type === this.state.tissueType );
    }
    return filteredTasks.map((tissue) => (
        <Tissue key={tissue._id} {...tissue}/>
    ));
  }

  render () {
    return (
      <div className='container'>

        <div className="tissue-list">
          <div className={ this.isActive('adult') } data-id="adult" onClick={ this.toggleTissueType.bind(this, 'adult')}>
              <h1>Adult Cells/Tissues</h1>
          </div>
          <div className={this.isActive('cancer')} data-id="cancer" onClick={ this.toggleTissueType.bind(this, 'cancer') }>
              <h1>Cancer Cells</h1>
          </div>
          <div className={this.isActive('es')} data-id="es" onClick={ this.toggleTissueType.bind(this, 'es') }>
              <h1>ES / iPS Cells</h1>
          </div>
          <div className={this.isActive('fetal')} data-id="fetal" onClick={ this.toggleTissueType.bind(this, 'fetal') }>
              <h1>Fetal Cells/Tissues</h1>
          </div>
          <button className="btn btn-warning" onClick={ this.showAll.bind(this) }>Show All</button>
        </div>

        <ul>
          { this.renderRows() }
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {

  return { tissues: Tissues.find({}).fetch() };

}, TissuesList);
