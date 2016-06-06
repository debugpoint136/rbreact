import React, { Component } from 'react';

class Header extends Component {

  render () {
    return (
        <nav className="nav navbar-default">
          <div className="navbar-header">
            <div className="navbar-brand">Repeat Browser</div>
          </div>
          <ul className="nav navbar-nav">
            <li className="list-group-item">
              <h5>Login</h5>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Header;
