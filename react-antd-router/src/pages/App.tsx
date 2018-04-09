import * as React from 'react';
import '../resource/style/App.css';
import TopMenu from './layout/TopMenu';
import MainContent from './layout/Content';
import { Layout } from 'antd';
import LeftMenu from '../components/navigate/menu/LeftMenu';
const { Footer, Sider, Content, Header } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout
          onLoad={() => {
            console.log('onload Layout');
          }}
        >
          <Header>
            <TopMenu />
          </Header>
          <Layout>
            <Sider width={256} style={{ background: '#fff' }}>
              <LeftMenu />
            </Sider>
            <Content>
              <MainContent date="2018-04-01 11:30:12" />
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
