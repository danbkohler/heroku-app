import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//To run this code in localhost:3000
//npm start
// Ctrl + C to end program

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
        }
    }

    getNine = () => {
        console.log('state');
        this.setState({
            nine: '9'
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
                <button className='elf' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
}

export default App;
