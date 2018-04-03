import * as React from 'react';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content date={'2018-03-22 16:28:00'} />
        {/* <Content /> */}
      </div>
    );
  }
}

export default App;
