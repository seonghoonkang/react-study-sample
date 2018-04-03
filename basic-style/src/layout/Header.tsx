import * as React from 'react';
const logo = require('../logo.svg');
class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Basic Style Project</h2>
      </header>
    );
  }
}

export default Header;
