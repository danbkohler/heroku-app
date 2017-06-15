/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/App.css';

//Note: ElfAddress imports AddressShow
//Should path for /small be App or SmallNumbers?  App because class is what matters

//Replaced <LinkContainer this.state.index to='/'><NavItem>Address Show</NavItem></LinkContainer>
class ElfMenu extends Component {

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
                        <LinkContainer to='/'><NavItem>AddressShow</NavItem></LinkContainer>
                        <LinkContainer to='/edit'><NavItem>AddressEdit</NavItem></LinkContainer>
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
    //cleaned up render
    //breaks if you go to Edit before clicking a button
    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><NavItem>CongressAddress</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                    <Nav>
                        <LinkContainer to='/'><NavItem>AddressShow</NavItem></LinkContainer>
                        <LinkContainer to='/edit'><NavItem>AddressEdit</NavItem></LinkContainer>
                    </Nav>
            </Navbar>
        );
        return (
            <div>
                {navbarInstance}
            </div>
        );
    }

    /*
    //Old render method prior to ReactBootstrap
    render() {
        return (
            //<Router>
                <div>
                    <div className='ElfMenuDiv'>
                        <ul>
                            <li><Link to='/'>AddressShow</Link></li>
                            <li><Link to='/edit'>AddressEdit</Link></li>
                            <li><Link to='/small'>SmallNumbers</Link></li>
                        </ul>
                    </div>
                </div>
            //</Router>
        );
    }//end render
    */
    //Route code being commented out as DataMaven will be handling this code
    /*
     <Route exact path='/' component={ElfAddress}/>
     <Route path='/edit' component={AddressChanger}/>
     <Route path='/small' component={App}/>
     */
}

export default ElfMenu;
