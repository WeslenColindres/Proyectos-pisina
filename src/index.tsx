import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import './Proyecto_3/style/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
  
);
root.render(
  <Router>

    <App />
    
  </Router>
);

