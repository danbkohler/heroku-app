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
//Still broken after doing it ('that' and 'logger' not defined)

//After changing index.js to use DataMaven, I get these errors for this file:
/*
46:9 error 'dataLoader' is not defined no-undef
74:9 error 'detailLogger' is not defined no-undef
84:9 error 'detailLogger' is not defined no-undef
85:25 error 'getByIndex' is not defined no-undef
*/
//After moving code to DataMaven, these errors occur there instead

//TODO: Ultimate goal to get rid of this class entirely, for now only use render
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
