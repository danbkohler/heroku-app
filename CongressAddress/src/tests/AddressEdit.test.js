/**
 * Created by bcuser on 5/1/17.
 */
import React from 'react';
import Address from '../components/ElfAddress';
import AddressShow from '../components/AddressShow';
import AddressChanger from '../components/AddressChanger';
import { mount } from 'enzyme';
import addresses from '../address-list';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'NaiveAddressEdit.test.js');
import '../css/index.css';

const address = addresses[0];

//I think these cases may be for AddressShow, not AddressEdit
describe('Naive Address Edit Mount Jest Suite', function() {

    //Copy-paste from writing child tests (for AddressShow???):
    it('renders and displays the default last name', () => {
        const wrapper = mount(<Address address={address}  />);
        const welcome = <p className='App-intro'>lastName: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowRender', 1, true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    fit('renders and displays the default address in Show', () => {
        const wrapper = mount(<Address address={address}  />);
        const address1 = <p>Address: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#AddressShowDiv', 3, true);
        expect(wrapper.contains(address1)).toEqual(true);
    });

    //Copy-paste from ReactAddressEdit (for AddressEdit
    it('renders and displays the default value for firstName', () => {
        const wrapper = mount(<AddressChanger />);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <input id="elfFirstName" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    fit('renders and displays the default address line in Edit', () => {
        const wrapper = mount(<AddressChanger />);
        elfDebugEnzyme.getFirst(wrapper, 'input');
        const address1 = <input id='changeStreet' className='AddressEditDiv' value='unknown' />;
        expect(wrapper.containsMatchingElement(address1)).toEqual(true);
    });

    it('renders and displays the default first name DK', () => {
        const wrapper = mount(<AddressChanger />);
        elfDebugEnzyme.getFirst(wrapper, 'input');
        const address1 = <input id='changeFirstName' className='AddressEditDiv' value='unknown' />;
        expect(wrapper.containsMatchingElement(address1)).toEqual(true);
    });

    //
    //Starting over ignore below

    it('renders and displays the default value for firstName', () => {
        const wrapper = mount(<AddressChanger />);
        //elfTestDebug.getFirst(wrapper, 'input');
        elfDebugEnzyme.getIndex(wrapper, 'div#AddressEditDiv', 1, true);
        const welcome = <input id='changeStreet' className='App-intro' value='unknown' />;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default value for firstName', () => {
        const wrapper = mount(<AddressChanger />);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <input id="elfFirstName" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    //Method “childAt” is only meant to be run on a single node. 0 found instead.
    it('renders and displays the default address line 1', () => {
        const wrapper = mount(<Address address={address}  />);
        const address1 = <p>Address: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#AddressShowDiv', 2, true);
        expect(wrapper.contains(address1)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = mount(<Address address={address}  />);
        const welcome = <p className='App-intro'>lastName: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowRender', 1, true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message for first name', () => {
        const wrapper = mount(<Address address={address}/>);
        const patty = <p className='App-intro'>lastName: Murray</p>;
        wrapper.find('button#showAddressClick').simulate('click');
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowRender', 1, true);
        expect(wrapper.contains(patty)).toEqual(true);
    });

});
