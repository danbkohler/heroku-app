import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

//To run this code in linux command
//npm test
// Ctrl + C to end program


//React Jest Suite
//Jest Create React Tests
describe('jest test', function () {


    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('see if true is true', () => {
        expect(true).toBe(true);
    });

    //New code for react jest
    it('renders button click message', () => {
       const wrapper = shallow(<App />);
       const nineSign = <p className="App-intro">Nine: 9</p>;
       wrapper.find('button.elf').simulate('click');
       expect(wrapper.contains(nineSign)).toEqual(true);
    });

    //New code for UnitTestsAddress
    it('renders and displays the default first name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        const firstName = wrapper.find('p').last().debug();
        console.log(firstName);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});
