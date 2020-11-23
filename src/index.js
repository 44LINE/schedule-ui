import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HttpsRedirect>
  <React.StrictMode>
    <main>
      <App />
    </main>
  </React.StrictMode>
  </HttpsRedirect>,
  document.getElementById('root')
);
reportWebVitals();
