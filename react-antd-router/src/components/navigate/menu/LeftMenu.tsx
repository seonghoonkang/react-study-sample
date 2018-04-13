import * as React from 'react';
import { Menu, Icon, Switch } from 'antd';
import { MenuMode } from 'antd/lib/menu';
const { SubMenu } = Menu;
interface LeftMenuStates {
  mode: MenuMode;
  theme: 'light' | 'dark';
  modeText: string;
  themeText: String;
}

interface LeftMenuProps {}

class LeftMenu extends React.Component<LeftMenuProps, LeftMenuStates> {
  constructor(props: LeftMenuProps) {
    super(props);
    this.state = {
      mode: 'inline',
      modeText: '인라인메뉴',
      theme: 'dark',
      themeText: '어두움'
    };
  }
  changeTheme(value: boolean): void {
    this.setState({
      theme: value ? 'dark' : 'light',
      themeText: value ? '어두움' : '밝음'
    });
  }
  render() {
    return (
      <div>
        <Switch
          onChange={value => {
            this.setState({
              mode: value ? 'vertical' : 'inline',
              modeText: value ? '팝업메뉴' : '인라인 메뉴'
            });
          }}
        />
        {this.state.modeText}
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <Switch
          onChange={value => this.changeTheme(value)}
          defaultChecked={true}
        />
        {this.state.themeText}
        <br />
        <br />
        <Menu
          style={{ width: '100%' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Four</span>
              </span>
            }
          >
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LeftMenu;
