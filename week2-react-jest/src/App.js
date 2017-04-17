import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//To run this code in localhost:3000
//npm start

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
            firstName: 'FirstName',
            lastName: 'LastName',
            street: 'Street Address',
            street2: 'Address 2',
            city: 'City',
            usstate: 'State',
            zip: 'Zip'
        }
    }

    getNine = () => {
        console.log('state');
        this.setState({
            nine: '9'
        })
    };

    //Added for unitTestsAddress
    //This runs when address button clicked
    setAddress = () => {
      this.setState({
          firstName: 'Patty',
          lastName: 'Murray',
          street: '915 2nd Ave',
          street2: '#2988',
          city: 'Seattle',
          usstate: 'WA',
          zip: '98174'
      })
    };

    //Comment out Nine: {this.state.nine}?
    //and <button className='elf' onClick={this.getNine}>Get Nine</button>?
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to PROG 272</h2>
                </div>
                <p className="App-intro">
                    Nine: {this.state.nine}

                </p>
                <p>Name: {this.state.firstName} {this.state.lastName} </p>
                <p>Address Line 1: {this.state.street}</p>
                <p>Address Line 2: {this.state.street2}</p>
                <p>City/State/Zip: {this.state.city} {this.state.usstate} {this.state.zip}</p>

                <button className='elf' onClick={this.getNine}>Get Nine</button>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default App;
