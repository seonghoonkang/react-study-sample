import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
