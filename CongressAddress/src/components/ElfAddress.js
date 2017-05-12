/**
 * Created by bcuser on 4/22/17.
 */
import React, { Component } from 'react';
import addresses from '../address-list';
import AddressShow from './AddressShow';


class Address extends Component {
    constructor(props) {
        super(props);
        //Adding due to change in onAddressChange declaration syntax
        this.onAddressChange = this.onAddressChange.bind(this);

        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address
        };
        this.quiet = true;
    }

    //Was [onAddressChange = (event) =>] before JSCS
    //Not sure why this change was necessary as JSCS doesn't seem to take issue with it
    onAddressChange(event) {

        if(this.addressIndex < addresses.length - 1)
        {
            this.addressIndex += 1;
        }
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };

    onAddressChangeReverse = (event) => {
        if (this.addressIndex > 0)
        {
            this.addressIndex -= 1;
        }
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };

    //Adding on 5/01 for ReactAddressEdit
    onNameChange = (event) => {
        //this.log("ON NAME CHANGE");
        const address = addresses[this.addressIndex];
        switch (event.target.id) {
            case 'changeFirstName':
                address.firstName = event.target.value;
                break;
            case 'changeLastName':
                address.lastName = event.target.value;
                break;
            case 'changeStreet':
                address.street = event.target.value;
                break;
            case 'changeCity':
                address.city = event.target.value;
                break;
            case 'changeState':
                address.usState = event.target.value;
                break;
            case 'changeZip':
                address.zip = event.target.value;
                break;
            case 'changePhone':
                address.phone = event.target.value;
                break;
            case 'changeWebsite':
                address.website = event.target.value;
                break;
            default:
                throw new Error('Bad case in Address onNameChange');
        }
        this.setState({
            address: address
        })
    };

    //New render for ReactAddressMenu
    render() {
        if (!this.quiet) { console.log('ADDRESS RENDER'); }
        return (

            <div className='App'>
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onAddressChangeReverse={this.onAddressChangeReverse}
                />
            </div>
        );
    }

}//end of class Address

export default Address;
