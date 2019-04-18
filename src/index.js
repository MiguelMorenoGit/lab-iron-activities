import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// nos importamos BrowserRouter
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render((
  //Router solo puede tener un hijo
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
