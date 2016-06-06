import React, { Component } from 'react';
import Header from './header';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
          <div className="app">
            { this.props.children }
          </div>
      </div>
    );
  }
}

export default App;
