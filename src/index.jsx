import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

// comp
import App from './App';
// css
import './bootstrap.min.css';

ReactDOM.render(
  <GlobalProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </GlobalProvider>,
  document.getElementById('root')
);
