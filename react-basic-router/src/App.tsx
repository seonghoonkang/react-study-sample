import './App.css';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import About from './pages/AboutRoot';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
