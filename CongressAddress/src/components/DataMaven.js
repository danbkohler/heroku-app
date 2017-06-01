/**
 * Created by bcuser on 5/23/17.
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//ReactAddressDataMaven does not specify ', Route' but seems necessary
import ElfAddress from './ElfAddress';
//import AddressChanger from './AddressChanger';
import AddressEdit from './AddressEdit';
import App from './SmallNumbers';
import ElfMenu from './ElfMenu';
import ElfHeader from './ElfHeader';
import addresses from '../address-list';
import 'whatwg-fetch';
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();
import Logger from '../assets/elf-logger';
const logger = new Logger('data-maven', 'yellow', 'green', '16px');
const detailLogger = new Logger('data-maven:detail', 'white', 'green', '16px');
import {getByIndex} from '../assets/elf-local-storage';

/*
 47:9   error    'dataLoader' is not defined                 no-undef
 56:9   error    'detailLogger' is not defined               no-undef
 66:9   error    'detailLogger' is not defined               no-undef
 67:25  error    'getByIndex' is not defined                 no-undef
*/
//Is this set of errors related to LearnLocalStorage? whatwg-fetch?

class DataMaven extends Component {
    constructor(props) {
        super(props);
        logger.log('DataMaven constructor called at this point');
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onAddressChangeReverse = this.onAddressChangeReverse.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.firstLastToggle = this.firstLastToggle.bind(this);

        /*
         //Adding for http://www.ccalvert.net/books/CloudNotes/Assignments/Browser/LearnLocalStorage.html#load-json
         fetch('./addresses.json').then(function(data) {
         const addresses = data.json();
         console.log(addresses);
         return addresses;
         }).then(function (data) {
         console.log(JSON.stringify(data, null, 4));
         that.addresses = data;
         that.setLocalStorage();
         }).catch(function (err) {
         logger.log(err);
         })
         */

        //Adding for http://www.ccalvert.net/books/CloudNotes/Assignments/React/ReactAddressMock.html
        //DataLoader section
        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
        });

        //Moved to after DataLoader section
        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address
        };
        this.quiet = true;
    }

    onAddressChange(event) {
        detailLogger.log('onAddressChange called with', event.target.id);
        if (event.target.id.startsWith('dec')) {
            if (this.addressIndex > 0) {
                this.addressIndex -= 1;
            }
        } else {
            if (this.addressIndex < this.addressCount) {
                this.addressIndex += 1;
            }
        }
        detailLogger.log('addressIndex', this.addressIndex);
        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        });
    };

    onAddressChangeReverse(event) {
        if (this.addressIndex > 0) {
            this.addressIndex -= 1;
        }
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    firstLastToggle(event) {
        if (this.addressIndex < addresses.length - 1) {
            this.addressIndex = addresses.length - 1;
        } else {
            this.addressIndex = 0;
        }
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    //Can now delete from ElfAddress in theory...
    onNameChange(event) {
        //this.log("ON NAME CHANGE");
        const address = addresses[this.addressIndex];
        switch (event.target.id) {
            case 'changeFirstName':
                address.firstName = event.target.value;
                break;
            case 'changeLastName':
                address.lastName = event.target.value;
                break;
            case 'changeStreet':
                address.street = event.target.value;
                break;
            case 'changeCity':
                address.city = event.target.value;
                break;
            case 'changeState':
                address.usState = event.target.value;
                break;
            case 'changeZip':
                address.zip = event.target.value;
                break;
            case 'changePhone':
                address.phone = event.target.value;
                break;
            case 'changeWebsite':
                address.website = event.target.value;
                break;
            default:
                throw new Error('Bad case in Address onNameChange');
        }
        this.setState({
            address: address
        });
    };

    //For LearnLocalStorage
    componentDidMount() {
        logger.log('DID MOUNT');
        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
            logger.log('LOADED ADDRESS');
            const address = getByIndex(that.addressIndex);
            that.setState({
                address: address
            });
        });
    }

    //TODO: I need to pass props to ElfAddress and AddressEdit
    //Took out <Route exact path='/' component={ElfAddress}/>
    render() {
        return (
            <Router>
                <div className="container">
                    <ElfHeader />
                    <ElfMenu />
                    <Route exact path='/' render={(props) => (
                        <ElfAddress {...props}
                             address={this.state.address}
                             onAddressChange={this.onAddressChange}
                             onAddressChangeReverse={this.onAddressChangeReverse}
                             firstLastToggle={this.firstLastToggle}
                        />
                    )}/>
                    <Route path='/edit' render={(props) => (
                        <AddressEdit {...props}
                             address={this.state.address}
                             onAddressChange={this.onAddressChange}
                             onNameChange={this.onNameChange}
                             onAddressChangeReverse={this.onAddressChangeReverse}
                             firstLastToggle={this.firstLastToggle}
                        />
                    )}/>
                    <Route path='/small' component={App}/>
                </div>
            </Router>
        );
    }
}
//<Route path='/edit' component={AddressChanger}/> was replaced by <Route path='/edit' component={AddressEdit}/>
//This was modified further for DataMaven & AddressEdit near end of ReactAddressDataMaven
export default DataMaven;