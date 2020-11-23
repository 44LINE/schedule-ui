import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Harmonogram| Rok 2 Niestacjonarne</title>
        <meta 
          name="description" 
          content="Harmonogram dla studentów roku drugiego Politechniki Krakowskiej na kierunku informatyka - wydział WIiT" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta 
          itemprop="name" 
          content="Harmonogram| Rok 2 Niestacjonarne" />
        <meta 
          itemprop="description" 
          content="Harmonogram dla studentów roku drugiego Politechniki Krakowskiej na kierunku informatyka - wydział WIiT" />
        <meta 
          itemprop="image" 
          content="https://www.signs.pl/il/17/pk.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta 
          property="og:url"  
          content="https://pk-schedule-ui.herokuapp.com" />
        <meta 
          property="og:type" 
          content="website" />
        <meta 
          property="og:title" 
          content="Harmonogram| Rok 2 Niestacjonarne" />
        <meta 
          property="og:description" 
          content="Harmonogram dla studentów roku drugiego Politechniki Krakowskiej na kierunku informatyka - wydział WIiT" />
        <meta 
          property="og:image" 
          content="https://www.signs.pl/il/17/pk.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta 
          name="twitter:card" 
          content="summary_large_image" />
        <meta 
          name="twitter:title" 
          content="Harmonogram| Rok 2 Niestacjonarne" />
        <meta 
          name="twitter:description" 
          content="Harmonogram dla studentów roku drugiego Politechniki Krakowskiej na kierunku informatyka - wydział WIiT" />
        <meta 
          name="twitter:image" 
          content="https://www.signs.pl/il/17/pk.png" />
          
      </Helmet>
      <App />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
