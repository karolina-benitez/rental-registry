import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">
            <p>
              <span>California</span>
              <span>Rental Registry</span>
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
