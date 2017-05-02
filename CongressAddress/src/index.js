import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import Address from './components/Address';
import ElfMenu from './components/ElfMenu'
import './css/index.css';

//Alt C + R to reformat code alignment


ReactDOM.render(
  <div>
    <App />,
    <ElfMenu />
  </div>,
  document.getElementById('root')
);
