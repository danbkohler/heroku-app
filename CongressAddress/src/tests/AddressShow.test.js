/**
 * Created by bcuser on 4/24/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AddressShow from '../components/AddressShow';
import { shallow } from 'enzyme';
import addresses from '../address-list';

//This file does nothing yet.

describe('AddressShow Shallow Suite', function () {
    var quiet = true;

    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={address}  />);
        const welcome = <p className="App-intro">{name}</p>;
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