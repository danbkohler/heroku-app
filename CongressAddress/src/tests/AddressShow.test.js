/**
 * Created by bcuser on 4/24/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AddressShow from '../components/AddressShow';
import { shallow } from 'enzyme';
import addresses from '../address-list';
import Address from '../components/ElfAddress';

//should I be using: const wrapper = shallow(<Address />);
//or: const wrapper = shallow(<AddressShow />);
//When using the latter I get TypeError: Cannot read property 'firstName' of undefined
//When using the former, I don't get an error, but the test fails anyhow
//And simulating clicks w/former: Method “props” is only meant to be run on a single node. 0 found instead.
//Is shallow the problem?

describe('AddressShow Shallow Suite', function() {
    var quiet = true;

    // button test
    it('responds to a button click', () => {
        //create variable to track button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };

        const wrapper = shallow(<Address onAddressChange = {callback} address={this.props.address.street}/>);
        wrapper.find('button.showAddressClick').simulate('click');
        expect(clicked).toEqual(true);
    });

    //const wrapper = shallow(<Address addressList={addresses} />);
    it('renders default address line 1', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const unknownAddress = <p>Address: unknown</p>;
        expect(wrapper.contains(unknownAddress)).toEqual(true);
    });

    it('renders first button click address line 1', () => {
        const wrapper = shallow(<Address />);
        const murrayAddress = <p>Address: 915 2nd Ave, #2988</p>;
        wrapper.find('button.showAddressClick').simulate('click');
        expect(wrapper.contains(murrayAddress)).toEqual(true);
    });

    //Old code
    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={address}  />);
        const welcome = <p className='App-intro'>{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName: unknown', 0);
    });

});

/*
 it('renders and displays the default full name', () => {
 const wrapper = shallow(<AddressShow addressList={addresses} />);
 //const welcome = <p className="App-intro">firstName: unknown</p>;
 //const firstName = wrapper.find('p').last().debug();
 //console.log(firstName);
 //expect(wrapper.contains(welcome)).toEqual(true);
 const fullName = <p>Name: unknown unknown </p>;
 expect(wrapper.contains(fullName)).toEqual(true);
 });
 */
