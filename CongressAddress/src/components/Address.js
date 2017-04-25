/**
 * Created by bcuser on 4/22/17.
 */
import React, { Component } from 'react';
import logo from '../images/logo.svg';


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

export default Address;