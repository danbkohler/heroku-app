import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address';
import addresses from './address-list';
import './css/index.css';

//Alt C + R to reformat code alignment


ReactDOM.render(
  <div>
    <App />,
    <Address addressList={addresses} />
  </div>,
  document.getElementById('root')
);
