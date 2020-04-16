import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './context/GlobalState';

// compo
import App from './App';
// css
import './bootstrap.min.css';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,

  document.getElementById('root')
);
