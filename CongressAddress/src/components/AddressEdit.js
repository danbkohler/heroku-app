/**
 * Created by bcuser on 4/26/17.
 */
import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/AddressEdit.css';


class AddressEdit extends Component {
    constructor(props) {
        super(props);
        this.quiet = false;
        //this.log('ADDRESS EDIT CONSTRUCTOR', this.props.address);
    }


    render() {
        //this.log("SHOW ADDRESS RENDER");

        return (
            <div className="AddressEditDiv">
                <input id="changeFirstName" value={this.props.address.firstName} onChange={this.props.onNameChange}/>
                <input id="changeLastName" value={this.props.address.lastName} onChange={this.props.onNameChange}/>
                <br />
                <input id="changeStreet" value={this.props.address.street} onChange={this.props.onNameChange}/><br />
                <input id="changeCity" value={this.props.address.city} onChange={this.props.onNameChange}/><br />
                <input id="changeState" value={this.props.address.usState} onChange={this.props.onNameChange}/><br />
                <input id="changeZip" value={this.props.address.zip} onChange={this.props.onNameChange}/><br />
                <input id="changePhone" value={this.props.address.phone} onChange={this.props.onNameChange}/><br />
                <input id="changeWebsite" value={this.props.address.website} onChange={this.props.onNameChange}/>
                <br />
                <button id="showAddressClick" onClick={this.props.onAddressChange}>Edit Next Address</button>
                <button id="showAddressClickBack" onClick={this.props.onAddressChangeReverse}>Edit Prior Address</button>

            </div>
        );
    }


//Copypasta of AddressShow w/changes
}//end of class AddressEdit

export default AddressEdit;