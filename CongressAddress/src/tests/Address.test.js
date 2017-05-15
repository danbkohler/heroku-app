/**
 * Created by bcuser on 4/22/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/ElfAddress';
import { mount } from 'enzyme';
import addresses from '../address-list';

//This currently contains tests for ElfAddress and its import, AddressShow
describe('Address Test', function() {

    it('address renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address addressList={addresses} />, div);
    });

    it('displays the Address Toggle button', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        const innerNode = wrapper.find('#firstLastToggle');
        expect(innerNode.length).toEqual(1);
    });

    it('renders and displays the default full name', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        //const firstName = wrapper.find('p').last().debug();
        const fullName = <p>Name: unknown unknown </p>;
        expect(wrapper.contains(fullName)).toEqual(true);
    });

    //What is syntax to test for a variable value instead of literal string using contains?
    it('renders and displays the 1st updated full name', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        //wrapper.find('button').simulate('click');
        wrapper.find('#showAddressClick').simulate('click');
        const fullName = <p>Name: Patty Murray </p>;
        expect(wrapper.contains(fullName)).toEqual(true);
    });

    it('renders and displays the 2nd updated full name', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        wrapper.find('#showAddressClick').simulate('click');
        wrapper.find('#showAddressClick').simulate('click');
        const fullName = <p>Name: Maria Cantwell </p>;
        expect(wrapper.contains(fullName)).toEqual(true);
    });

    it('renders and displays the default address line 1', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        //const address = <p>Address: {this.state.street}</p>
        const address = <p>Address: unknown</p>;
        expect(wrapper.contains(address)).toEqual(true);
    });

    //Here is what I had tried in AddressEdit.test:
    //wrapper was incorrect, and elfDebugEnzyme stuff likely just introducing confusion
    /*
    fit('renders and displays the default address in Show', () => {
        const wrapper = mount(<Address address={address}  />);
        const address1 = <p>Address: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowDiv', 1, true);
        expect(wrapper.contains(address1)).toEqual(true);
    });
    */

    it('renders and displays the 1st updated address line 1', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        wrapper.find('#showAddressClick').simulate('click');
        const address = <p>Address: 915 2nd Ave, #2988</p>;
        expect(wrapper.contains(address)).toEqual(true);
    });

    it('renders and displays the default website', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        const website = <p>Website: unknown</p>;
        expect(wrapper.contains(website)).toEqual(true);
    });

    it('renders and displays the 1st updated website', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        wrapper.find('#showAddressClick').simulate('click');
        const website = <p>Website: https://www.murray.senate.gov/public/</p>;
        //const website = <p>Website: {this.state.website}</p>
        console.log(addresses.website); //undefined
        expect(wrapper.contains(website)).toEqual(true);
    });

    it('Displays default phone number', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        const phone = <p>Phone: unknown</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('Displays 1st updated phone number', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        wrapper.find('#showAddressClick').simulate('click');
        const phone = <p>Phone: (206)553-5545</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('Displays default city/state/zip?', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        const phone = <p>City/State/Zip: unknown unknown unknown</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('Displays 1st updated city/state/zip', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        wrapper.find('#showAddressClick').simulate('click');
        const phone = <p>City/State/Zip: Seattle WA 98174</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    /*
    it('renders and reads H2 text', () => {
        const wrapper = mount(<Address addressList={addresses} />);
        const welcome = <h2>Welcome to Prog 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    */

    /*
     it('displays the default App-logo', () => {
     const wrapper = mount(<Address addressList={addresses} />);
     const innerNode = wrapper.find('.App-logo');
     expect(innerNode.length).toEqual(1);
     });
     */

    it('see if true is true', () => {
        expect(true).toBe(true);
    });
    //Test case #15 in this file...

});
