import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import { BrowserRouter as Router, Route, /*Switch*/ } from 'react-router-dom';
import App from './App';
import './css/global.css'
import { Provider } from './Context';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
