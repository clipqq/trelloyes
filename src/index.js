import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const testCards =
  [
    {
      id: 3463,
      title: 'cliff',
      task: 'do something'
    },
    {
      id: 5749,
      title: 'willie',
      task: 'do something else'
    }
  ]

ReactDOM.render(<App cards={testCards} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
