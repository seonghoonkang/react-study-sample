import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';
// https://blueshw.github.io/2017/06/22/static-routing-vs-dynamic-routing/
// 정적 라우터(V3)에서 동적 라우터(V4)로 변경
// BrowserRouter는 동적라우터에서 사용

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App auth={true} />
      </BrowserRouter>
    );
  }
}

export default Root;
