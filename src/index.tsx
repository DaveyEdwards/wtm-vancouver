import * as React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';

ReactDOM.render(<Root lightTheme={true} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
