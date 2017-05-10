/**
 * Created by bcuser on 4/26/17.
 */
import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/AddressShow.css';


class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = false;
        this.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }

    log(message, message2 = '', message3 = '') {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    //Cleaning up render
    render() {
        this.log("SHOW ADDRESS RENDER");

        return (
            <div className="AddressShowDiv">
                <p>Name: {this.props.address.firstName} {this.props.address.lastName} </p>
                <p>Address: {this.props.address.street}</p>
                <p>City/State/Zip: {this.props.address.city} {this.props.address.usState} {this.props.address.zip}</p>
                <p>Phone: {this.props.address.phone}</p>
                <p>Website: {this.props.address.website}</p>

                <button id="showAddressClick" onClick={this.props.onAddressChange}>Show Address</button>
            </div>
        );
    }

    /*
    render() {
        this.log("SHOW ADDRESS RENDER");

        return (
            <div className="App">
                <div className="App-intro">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Prog 272</h2>
                </div>
                <p>Name: {this.props.address.firstName} {this.props.address.lastName} </p>
                <p>Address: {this.props.address.street}</p>
                <p>City/State/Zip: {this.props.address.city} {this.props.address.usState} {this.props.address.zip}</p>
                <p>Phone: {this.props.address.phone}</p>
                <p>Website: {this.props.address.website}</p>

                <button id="showAddressClick" onClick={this.props.onAddressChange}>Show Address</button>
            </div>
        );
    }
    */

    //Will get rid of button clicks?

    /*
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
     */

    /*

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
     */

}//end of class AddressShow

export default AddressShow;