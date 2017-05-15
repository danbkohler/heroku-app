/**
 * Created by bcuser on 5/12/17.
 */
import React from 'react';
import { mount } from 'enzyme';
import AddressChanger from '../components/AddressChanger';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Foo.test.js');

//Will implement these test cases in a bit
//Refer to Address.test for syntax assistance
//AddressChanger IMPORTS AddressEdit and EXTENDS Address
describe('React Address Changer Test Suite', function() {
    var quiet = true;

    //This is a functioning test case for AddressChanger!
    it('renders and displays the default value for firstName', () => {
        const wrapper = mount(<AddressChanger />);
        const firstName = <input id='changeFirstName' value='unknown' />;
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });

    /*
    it('renders and displays the default address line 1', () => {
        const wrapper = mount(<AddressChanger />);
        //const address = <p>Address: {this.state.street}</p>
        elfDebugEnzyme.getAll(wrapper, 'div#AddressEditDiv');
        const address = <p>Address: unknown</p>;
        expect(wrapper.containsMatchingElement(address)).toEqual(true);
    });
    */
});

