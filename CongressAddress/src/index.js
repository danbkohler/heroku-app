import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from './components/DataMaven';
//import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//type npm run go to start server and npm start at same time (see package.json)

//Current hierarchy:
/*
DataMaven
--ElfHeader
--ElfMenu
----AddressShow
--ElfAddress
--ElfEdit
--SmallNumbers

 */

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
