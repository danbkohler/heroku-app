/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import ElfAddress from './ElfAddress';
import AddressChanger from './AddressChanger';
import SmallNumbers from './SmallNumbers';
import App from './SmallNumbers';
import AddressShow from './AddressShow';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../css/App.css';

class ElfMenu extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <ul>
                            <li><Link to="/">AddressShow</Link></li>
                            <li><Link to="/edit">AddressEdit</Link></li>
                            <li><Link to="/small">SmallNumbers</Link></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={AddressShow}/>
                    <Route path="/edit" component={AddressChanger}/>
                </div>
            </Router>
        );
    }
}

export default ElfMenu;