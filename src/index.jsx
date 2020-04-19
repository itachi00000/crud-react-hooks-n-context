import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

// compo
import App from './App';
// css
import './bootstrap.min.css';

ReactDOM.render(
  <GlobalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalProvider>,
  document.getElementById('root')
);
