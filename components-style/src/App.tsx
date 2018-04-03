import * as React from 'react';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
