import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/SmallNumbers';
//import Address from './components/ElfAddress';
import ElfMenu from './components/ElfMenu'
import './css/index.css';

//Alt C + R to reformat code alignment

//WHAT IS ElfHeader?!?!?! I'm supposed to add it...
//I think it's App from SmallNumbers, so we're good?
//No it's a different thing... what is it????
//What assignment makes ElfHeader?!?!?!?!?!?!?!?

ReactDOM.render(
  <div>
    <App />,
    <ElfMenu />
  </div>,
  document.getElementById('root')
);
