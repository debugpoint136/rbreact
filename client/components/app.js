import React, { Component } from 'react';
import Header from './header';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
          <div className="app">
            App Component
            { this.props.children }
          </div>
      </div>
    );
  }
}

export default App;
