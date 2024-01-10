import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // highlighting potential problem by using strict mode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
