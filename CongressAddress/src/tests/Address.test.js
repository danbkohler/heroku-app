/**
 * Created by bcuser on 4/22/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Address from '../components/Address';

describe('Address Test', function () {

    //This test uses App & ReactDOM imports
    //Retaining for future reference
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    //I need to spend more time figuring out the purpose of these tests...
    //What do these tell me about my page that npm start doesn't?
    //What is the proper syntax for referencing code from Address?

    //Do I also import from address-list to get a single test ran,
    //despite Address.js not importing it (it is only imported from index.js)?
});