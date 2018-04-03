import * as React from 'react';
import './App.css';
import Button from 'antd/lib/button';
import Header from './layout/Header';
import Content from './layout/Content';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content date="2018-04-01 11:30:12" />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
