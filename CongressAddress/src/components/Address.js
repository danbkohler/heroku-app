/**
 * Created by bcuser on 4/22/17.
 */
import React, { Component } from 'react';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';


class Address extends Component {
    constructor(props) {
        super(props);


        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address
        };
        this.quiet = true;
    }

    onAddressChange = (event) => {
        this.addressIndex = 1;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };

    //Adding on 5/01 for ReactAddressEdit
    onNameChange = (event) => {
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
        })
    };

    //TODO: Rename to ElfAddress to avoid collisions
    //New render for ReactAddressMenu
    render() {
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
        return (

            <div className="App">
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }

    //Render method that doesn't use AddressEdit:
    /*
    render() {
        if (!this.quiet) {console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }
    */

    //New render method from 5/01/17
    /*
    render() {
        return (
            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }
    */


}//end of class Address





//OLDER VERSION THAT WORKS BUT DOESN'T USE AddressShow.js:
/*
 //Address Component Assignment 1

 class Address extends Component {
 constructor(props) {
 super(props);

 console.log('ADDRESS PROPS', typeof this.props);
 const address = this.props.addressList[0];
 this.state = {
 firstName: address.firstName,
 lastName: address.lastName,
 street: address.street,
 city: address.city,
 usState: address.usState,
 zip: address.zip,
 phone: address.phone,
 website: address.website
 }
 }

 setAddress = () => {
 const address = this.props.addressList[1]

 this.setState({
 firstName: address.firstName,
 lastName: address.lastName,
 street: address.street,
 city: address.city,
 usState: address.usState,
 zip: address.zip,
 phone: address.phone,
 website: address.website
 })
 };


 render() {
 return (
 <div className="App">
 <div className="App-header">
 <img src={logo} className="App-logo" alt="logo"/>
 <h2>Welcome to Prog 272</h2>
 </div>
 <p>Name: {this.state.firstName} {this.state.lastName} </p>
 <p>Address: {this.state.street}</p>
 <p>City/State/Zip: {this.state.city} {this.state.usState} {this.state.zip}</p>
 <p>Phone: {this.state.phone}</p>
 <p>Website: {this.state.website}</p>

 <button className="setAddress" onClick={this.setAddress}>Set Address</button>
 </div>
 );
 }
 }//end of class Address
 */
export default Address;