/**
 * Created by bcuser on 4/22/17.
 */
import React, { Component } from 'react';
//TODO: Make addresses import below no longer necessary
//import addresses from '../address-list';
import AddressShow from './AddressShow';
import 'whatwg-fetch';
import Logger from '../assets/elf-logger';
const logger = new Logger('address', 'yellow', 'green', '16px');

//fetch block will break page if you don't do: npm install --save whatwg-fetch

//Ultimate goal to get rid of this class entirely, for now only use render
class Address extends Component {
    constructor(props) {
        super(props);
        logger.log('ElfAddress constructor called - legacy code');

    }//end of Constructor

    //New render for ReactAddressMenu
    render() {
        logger.log('ADDRESS RENDER', this.props.address);
        return (

            <div className='App'>
                <AddressShow
                    address={this.props.address}
                    onAddressChange={this.props.onAddressChange}
                    onAddressChangeReverse={this.props.onAddressChangeReverse}
                    firstLastToggle={this.props.firstLastToggle}
                />
            </div>
        );
    }

}//end of class Address

export default Address;
