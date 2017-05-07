import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

//To run this code in localhost:3000
//first time on new client ONLY: npm install
//npm start
// Ctrl + C to end program

//git status
//git add .
//git commit -m "comment"
//git push


//You'll want to change this to SmallNumbers.js


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

    //Cleaning up render
    render() {
        return (
            <div className="App">
                <p className="App-intro">Nine: {this.state.nine}</p>
                <button className='elf' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }

    //Comment out Nine: {this.state.nine}?
    //and <button className='elf' onClick={this.getNine}>Get Nine</button>?
    /*
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to PROG 272</h2>
                </div>
                <p className="App-intro">Nine: {this.state.nine}</p>
                <button className='elf' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
    */
}

export default App;
