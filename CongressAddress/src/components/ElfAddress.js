/**
 * Created by bcuser on 4/22/17.
 */
import React, { Component } from 'react';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import 'whatwg-fetch';

//fetch block will break page if you don't do: npm install --save whatwg-fetch
//Still broken after doing it ('that' and 'logger' not defined)

class Address extends Component {
    constructor(props) {
        super(props);
        //Adding due to change in onAddressChange declaration syntax, for JSCS compliance
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onAddressChangeReverse = this.onAddressChangeReverse.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.firstLastToggle = this.firstLastToggle.bind(this);

        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address
        };
        this.quiet = true;

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
    }

    //Was [onAddressChange = (event) =>] before JSCS
    onAddressChange(event) {

        if (this.addressIndex < addresses.length - 1) {
            this.addressIndex += 1;
        }
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    //onAddressChangeReverse = (event) => {
    onAddressChangeReverse(event) {
        if (this.addressIndex > 0) {
            this.addressIndex -= 1;
        }
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    //Goes to last address unless at last address, then it goes to first.
    //New function for toggle button
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

    //Adding on 5/01 for ReactAddressEdit
    //onNameChange = (event) => {
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

    //New render for ReactAddressMenu
    render() {
        if (!this.quiet) { console.log('ADDRESS RENDER'); }
        return (

            <div className='App'>
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onAddressChangeReverse={this.onAddressChangeReverse}
                    firstLastToggle={this.firstLastToggle}
                />
            </div>
        );
    }

}//end of class Address

export default Address;
