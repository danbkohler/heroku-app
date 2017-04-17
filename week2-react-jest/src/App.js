import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
            firstName: 'unknown'
        }
    }

    getNine = () => {
        console.log('state');
        this.setState({
            nine: '9'
        })
    };

    //Added for unitTestsAddress
    setAddress = () => {
      this.setState({
          firstName: 'Patty'
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
                    firstName: {this.state.firstName}
                </p>

                <button className='elf' onClick={this.getNine}>Get Nine</button>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>button>

            </div>
        );
    }
}

export default App;
