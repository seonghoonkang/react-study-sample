import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <App />
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
