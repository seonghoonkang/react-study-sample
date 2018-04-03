import * as React from 'react';
import H2 from '../type-style/H2';

interface HeaderProps {
  title?: string;
}
interface HeaderStatus {}

const logo = require('../logo.svg');
class Header extends React.Component<HeaderProps, HeaderStatus> {
  constructor(props: HeaderProps) {
    super(props);
  }
  render() {
    return (
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className={H2}>{this.props.title} Project</h2>
      </header>
    );
  }
}

export default Header;
