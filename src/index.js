import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Scss
import './lib/style/scss/styles.scss';

// Prototype
import './lib/utils/prototype';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);