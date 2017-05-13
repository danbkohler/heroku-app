/**
 * Created by bcuser on 5/12/17.
 */
import React from 'react';
import { mount } from 'enzyme';
import AddressChanger from '../components/AddressChanger';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Foo.test.js');

describe('React Address Changer Test Suite', function() {
    var quiet = true;

    it('renders and displays the default full name', () => {
        const wrapper = mount(<AddressChanger />);
        const fullName = <p>Name: unknown unknown </p>;
        expect(wrapper.containsMatchingElement(fullName)).toEqual(true);
    });

    it('renders and displays the default address line 1', () => {
        const wrapper = mount(<AddressChanger />);
        //const address = <p>Address: {this.state.street}</p>
        elfDebugEnzyme.getAll(wrapper, 'div#AddressEditDiv');
        const address = <p>Address: unknown</p>;
        expect(wrapper.containsMatchingElement(address)).toEqual(true);
    });
});
