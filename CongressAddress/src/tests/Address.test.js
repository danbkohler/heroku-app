/**
 * Created by bcuser on 4/22/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/ElfAddress';
import { shallow } from 'enzyme';
import addresses from '../address-list';

describe('Address Test', function() {

    fit('address renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address addressList={addresses} />, div);
    });

    //Tests fail with changes from 5/01 (implementing AddressEdit)

    it('displays the Set Address button', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const innerNode = wrapper.find('.setAddress');
        expect(innerNode.length).toEqual(1);
    });

    it('displays the default App-logo', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const innerNode = wrapper.find('.App-logo');
        expect(innerNode.length).toEqual(1);
    });

    it('renders and displays the default full name', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        //const firstName = wrapper.find('p').last().debug();
        const fullName = <p>Name: unknown unknown </p>;
        expect(wrapper.contains(fullName)).toEqual(true);
    });

    //What is syntax to test for a variable value instead of literal string using contains?
    it('renders and displays the updated full name', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        //Simulate a click here
        wrapper.find('button').simulate('click');
        const fullName = <p>Name: Patty Murray </p>;
        expect(wrapper.contains(fullName)).toEqual(true);
    });

    it('renders and displays the default address line 1', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        //const address = <p>Address: {this.state.street}</p>
        const address = <p>Address: unknown</p>;
        expect(wrapper.contains(address)).toEqual(true);
    });

    it('renders and displays the updated address line 1', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.find('button').simulate('click');
        const address = <p>Address: 915 2nd Ave , #2988</p>;
        expect(wrapper.contains(address)).toEqual(true);
    });

    it('renders and displays the default website', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const website = <p>Website: unknown</p>;
        expect(wrapper.contains(website)).toEqual(true);
    });

    it('renders and displays the updated website', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.find('button').simulate('click');
        const website = <p>Website: https://www.murray.senate.gov/public/</p>;
        //const website = <p>Website: {this.state.website}</p>
        console.log(addresses.website); //undefined
        expect(wrapper.contains(website)).toEqual(true);
    });

    it('Displays default phone number', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const phone = <p>Phone: unknown</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('Displays updated phone number', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.find('button').simulate('click');
        const phone = <p>Phone: (206)553-5545</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('Displays default city/state/zip?', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const phone = <p>City/State/Zip: unknown unknown unknown</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('Displays updated city/state/zip', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        wrapper.find('button').simulate('click');
        const phone = <p>City/State/Zip: Seattle WA 98174</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const welcome = <h2>Welcome to Prog 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('see if true is true', () => {
        expect(true).toBe(true);
    });
    //Test case #15 in this file...

});
