import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './resource/style/index.css';

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
