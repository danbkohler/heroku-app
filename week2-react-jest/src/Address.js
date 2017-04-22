/**
 * Created by bcuser on 4/17/17.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Changes for Week 3 assignment??
/*
class Address extends Component{
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            firstName: this.props.address.firstName,
            lastName: this.props.address.lastName
        }
    }

    getAddress = () => {
        this.setState({
            firstName: 'Danny',
            lastName: 'Manny'
        })
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to PROG 272</h2>
                </div>
                <p>Name: {this.state.firstName} {this.state.lastName} </p>
                <p>Address Line 1: {this.state.street}</p>
                <p>Address Line 2: {this.state.street2}</p>
                <p>City/State/Zip: {this.state.city} {this.state.usState} {this.state.zip}</p>

                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );

}
*/

//This was from Week 3 Class 1

class Address1 extends Component {
    constructor() {
        super();
        this.state = {
            firstName: 'FirstName',
            lastName: 'LastName',
            street: 'Street Address',
            street2: 'Address 2',
            city: 'City',
            usState: 'State',
            zip: 'Zip'
        }
    }

    setAddress = () => {
        this.setState({
            firstName: 'Patty',
            lastName: 'Murray',
            street: '915 2nd Ave',
            street2: '#2988',
            city: 'Seattle',
            usState: 'WA',
            zip: '98174'
        })
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to PROG 272</h2>
                </div>
                <p>Name: {this.state.firstName} {this.state.lastName} </p>
                <p>Address Line 1: {this.state.street}</p>
                <p>Address Line 2: {this.state.street2}</p>
                <p>City/State/Zip: {this.state.city} {this.state.usState} {this.state.zip}</p>

                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }



}//end class

export default Address1
