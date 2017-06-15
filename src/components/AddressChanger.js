/**
 * Created by bcuser on 4/22/17.
 */
import React from 'react';
import addresses from '../address-list';
import AddressEdit from './AddressEdit';
import Address from './ElfAddress';

//Since I extend Address instead of Component here I get a warning that it's unused,
//but React is out of scope if I comment the line out. Removed just the [, {Component}] part
class AddressChanger extends Address {
    constructor(props) {
        super(props);
        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address
        };
        this.quiet = true;
    }

    render() {
        if (!this.quiet) {
            console.log('ADDRESS RENDER');
        }
        return (
            <div className='App'>
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onAddressChangeReverse={this.onAddressChangeReverse}
                    onNameChange={this.onNameChange}
                />
            </div>
        );
    }

}//end of class AddressChanger

export default AddressChanger;
