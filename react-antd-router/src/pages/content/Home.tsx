import * as React from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import LeftMenu from '../../components/navigate/menu/LeftMenu';
import MainContent from '../layout/Content';
import About from '../content/About';
import { Route, Switch } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ background: '#fff' }}>
          <LeftMenu />
        </Sider>
        <Content>
          {/* <MainContent date="2018-04-01 11:30:12" /> */}
          <Switch>
            <Route path="/about/:name" component={About} />
            <Route exact={true} path="/about" component={About} />
            <Route path="/" component={MainContent} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default Home;
