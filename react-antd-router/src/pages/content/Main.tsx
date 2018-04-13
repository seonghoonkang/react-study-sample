import * as React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router';
import TopMenu from '../layout/TopMenu';
import Home from '../content/Home';
import About from '../content/About';
const { Footer } = Layout;

class Main extends React.Component {
  render() {
    return (
      <Layout
        onLoad={() => {
          console.log('onload Layout');
        }}
      >
        <TopMenu />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Main;
