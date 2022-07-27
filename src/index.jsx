import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GitProvider } from './context/github/GitContext'
import { AlertProvider } from './context/alert/AlertContext'

ReactDOM.render(
  <React.StrictMode>
    <GitProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </GitProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


