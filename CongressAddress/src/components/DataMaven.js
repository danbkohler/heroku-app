/**
 * Created by bcuser on 5/23/17.
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//ReactAddressDataMaven does not specify ', Route' but seems necessary
import ElfAddress from './ElfAddress';
import AddressChanger from './AddressChanger';
import AddressEdit from './AddressEdit';
import App from './SmallNumbers';
import ElfMenu from './components/ElfMenu';
import ElfHeader from './components/ElfHeader';

class DataMaven extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ElfHeader />
                    <ElfMenu />
                    <Route exact path='/' component={ElfAddress}/>
                    <Route path='/edit' component={AddressEdit}/>
                    <Route path='/small' component={App}/>
                </div>
            </Router>
        );
    }
}
//<Route path='/edit' component={AddressChanger}/> was replaced by <Route path='/edit' component={AddressEdit}/>
export default DataMaven;
