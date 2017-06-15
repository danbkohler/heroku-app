import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/SmallNumbers';
import { shallow } from 'enzyme';

//To run this code in linux command
//npm test
// Ctrl + C to end program

//React Jest Suite
//Jest Create React Tests
describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    /*
    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to PROG 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    */
    /*
    it('renders and reads button text', () => {
        const wrapper = shallow(<App />);
        const buttonText = <button className='elf' onClick={this.getNine}>Get Nine</button>;
        expect(wrapper.contains(buttonText)).toEqual(true);
    });
    */

    it('see if true is true', () => {
        expect(true).toBe(true);
    });

    //New code for react jest
    it('renders default message', () => {
        const wrapper = shallow(<App />);
        const zeroSign = <p className='App-intro'>Nine: 0</p>;
        expect(wrapper.contains(zeroSign)).toEqual(true);
    });

    //New code for react jest
    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className='App-intro'>Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    //New code for UnitTestsAddress
    /*
    it('renders and displays the default first name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        const firstName = wrapper.find('p').last().debug();
        console.log(firstName);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    */
    //This test fails (redundant - see address.test)

});
