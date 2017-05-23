import React from 'react';
import ReactDOM from 'react-dom';
import ElfMenu from './components/ElfMenu';
import ElfHeader from './components/ElfHeader';
import DataMaven from "./components/DataMaven";
import './css/index.css';

//render used prior to ReactAddressDataMaven
/*
ReactDOM.render(
  <div>
    <ElfHeader />
    <ElfMenu />
  </div>,
  document.getElementById('root')
);
*/

ReactDOM.render(
    <div>
        <DataMaven/>
    </div>,
    document.getElementById('root')
);
