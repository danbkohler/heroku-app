/**
 * Created by bcuser on 5/23/17.
 */
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import DataMaven from '../components/DataMaven';
import { shallow } from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(true, 'DataMaven.test.js');
import DataLoader from '../assets/DataLoader';
//const dataLoader = new DataLoader(true, 'DataMaven.test.js');

describe('DataMaven Suite', function() {

    it('renders DataMaven component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DataMaven />, div);
    });
    //dataLoader is not defined
    //Who imports DataLoader, and how is it different from dataLoader (camelCase)
    //Not DataMaven, not DataMaven.test, not ElfMenu, not ElfAddress

    it('renders and displays a BrowserRouter', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper);
        var router = wrapper.find('BrowserRouter');
            expect(router.length).toEqual(1);
        });
    //This test passes!

    it('renders and displays at least one Route', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper);
        var router = wrapper.find('Route');
        expect(router.length).toBeGreaterThan(0);
    });
    //This test passes!

});