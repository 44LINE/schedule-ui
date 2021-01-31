import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import HttpsRedirect from 'react-https-redirect';
import App from './App';

ReactDOM.render(
  <HttpsRedirect>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </HttpsRedirect>,
  document.getElementById('root')
);
