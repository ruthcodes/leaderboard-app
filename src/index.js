import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();
