import * as React from 'react';
import { Layout, Menu } from 'antd';
import './Head.css';
const logo = require('../../resource/image/logo.svg');
const { Header } = Layout;
interface HeaderProps {}
interface HeaderStates {
  current: string;
}
class TopMenu extends React.Component<HeaderProps, HeaderStates> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      current: 'mail'
    };
  }
  render() {
    return (
      <Header className="header">
        {/* <div className="logo" /> */}
        <img src={logo} className="logo" alt="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default TopMenu;
