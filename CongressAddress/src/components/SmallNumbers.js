import React, { Component } from 'react';
import '../css/App.css';

//To run this code in localhost:3000
//first time on new client ONLY: npm install
//npm start
// Ctrl + C to end program

//git status
//git add .
//git commit -m "comment"
//git push


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

}

export default App;
