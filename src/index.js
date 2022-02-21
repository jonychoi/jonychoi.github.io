import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import GlobalProvider from './contexts/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);