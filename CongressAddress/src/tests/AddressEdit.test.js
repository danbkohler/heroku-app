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

//Some of these cases are for AddressShow, not AddressEdit
//Once I start getting some working I will move them around and delete templates
//Note: The test cases in SmallNumbers.test do Pass
describe('Naive Address Edit Mount Jest Suite', function() {

    //Copy-paste from writing child tests (for AddressShow???):
    it('renders and displays the default last name', () => {
        const wrapper = mount(<Address address={address}  />);
        const welcome = <p className='App-intro'>lastName: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowRender', 1, true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    //This might be a getIndex override or something, doesn't help the test case below though
    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowDiv').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={address}  />);
        const welcome = <p>{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    //My edit of the above template
    fit('renders and displays the default address in Show', () => {
        const wrapper = mount(<Address address={address}  />);
        const address1 = <p>Address: unknown</p>;
        elfDebugEnzyme.getIndex(wrapper, 'div#addressShowDiv', 1, true);
        expect(wrapper.contains(address1)).toEqual(true);
    });
    //Tried adding className='Address1' to <p> here and in AddressShow, didn't fix childAt error
    //It's NOT 'div#AddressShowDiv' because 'addressShowRender' isn't in AddressShow version on CloudNotes
    //I pasted in this getIndex const to see if it would have an effect, but no...

    //Copy-paste from ReactAddressEdit (for AddressEdit
    it('renders and displays the default value for firstName', () => {
        const wrapper = mount(<AddressChanger />);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <input id='elfFirstName' className='App-intro' value='unknown' />;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    //My edit of the above template
    fit('renders and displays the default address line in Edit', () => {
        const wrapper = mount(<AddressChanger />);
        elfDebugEnzyme.getFirst(wrapper, 'input');
        const address1 = <input id='changeStreet' className='App' value='unknown' />;
        expect(wrapper.containsMatchingElement(address1)).toEqual(true);
    });
    //className's tried: AddressEditDiv, App,

    fit('renders and displays the default firstName in Edit', () => {
        const wrapper = mount(<AddressChanger />);
        elfDebugEnzyme.getFirst(wrapper, 'input');
        const firstName = <input id='changeFirstName' className='AddressEditDiv' value='unknown' />;
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
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
