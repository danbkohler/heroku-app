/**
 * Created by bcuser on 4/17/17.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Work extends Component {

    //For Javascript Objects Assignment
    constructor() {
        super();
        this.person = {
            firstName: 'Dan',
            lastName: 'Kohler',
            //Part 2
            fullName: function() {
                return this.firstName + ' ' + this.lastName;
            }

        }

        this.calculator = {
            operator01: -1,
            operator02: -1,

            add: function(){
                return this.operator01 + this.operator02;
            },

            subtract: function(){
                return this.operator01 - this.operator02;
            }
        }

        this.calculator.operator01 = this.person.firstName.length;
        this.calculator.operator02 = this.person.lastName.length;


        this.calculator.multiply = function(operator01 , operator02) {
            return this.operator01 * this.operator02;
        }

    }


    render() {
        console.log(this.person.firstName + ' ' + this.person.lastName);
        console.log('fullName function = ' + this.person.fullName());
        console.log('FirstName Digits = ' + this.calculator.operator01);
        console.log('LastName Digits = ' + this.calculator.operator02);
        console.log('FirstName + LastName = ' + this.calculator.add());
        console.log('FirstName - LastName = ' + this.calculator.subtract());
        console.log('FirstName x LastName = ' + this.calculator.multiply());

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }



}

export default Work;
//console.log('person');