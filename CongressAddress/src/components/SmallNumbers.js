import React, { Component } from 'react';
//import '../css/App.css';
import { Link } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//Why am I getting "jscs expected end of node list but punctuator found ()" on line 1?

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
        this.getNine = this.getNine.bind(this);
        this.state = {
            nine: '0',
        };
    }
    //was getNine = () => {
    getNine() {
        console.log('state');
        this.setState({
            nine: '9'
        });
    };

    //for reference
    /*
    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><NavItem>CongressAddress</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer this.state.index to='/'><NavItem>Address Show</NavItem></LinkContainer>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
    */

    //Cleaning up render
    render() {
        return (
            <div className='App'>
                <p className='App-intro'>Nine: {this.state.nine}</p>
                <button className='elf' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }

}

export default App;
