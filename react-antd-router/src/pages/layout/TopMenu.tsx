import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
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
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/About">About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/About/Jesus?isShowDetail=false">Jesus</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default TopMenu;
