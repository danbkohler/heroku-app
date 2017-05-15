/**
 * Created by bcuser on 4/26/17.
 */
import React, { Component } from 'react';
import '../css/AddressShow.css';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        //changed quiet from false to true to reduce npm test message spam
        this.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
    }

    log(message, message2 = '', message3 = '') {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    //Cleaning up render
    render() {
        this.log('SHOW ADDRESS RENDER');

        return (
            <div className='AddressShowDiv'>
                <p>Name: {this.props.address.firstName} {this.props.address.lastName} </p>
                <p>Address: {this.props.address.street}</p>
                <p>City/State/Zip: {this.props.address.city} {this.props.address.usState} {this.props.address.zip}</p>
                <p>Phone: {this.props.address.phone}</p>
                <p>Website: {this.props.address.website}</p>

                <button id='showAddressClick' onClick={this.props.onAddressChange}>Show Next Address</button>
                <button id='showAddressClickBack' onClick={this.props.onAddressChangeReverse}>Show Prior Address</button>
                <button id='firstLastToggle' onClick={this.props.firstLastToggle}>Go to Last/First Address</button>
            </div>
        );
    }
}//end of class AddressShow

export default AddressShow;
