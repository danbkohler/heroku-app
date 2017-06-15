/**
 * Created by bcuser on 5/7/17.
 */
import React, {Component} from 'react';
import flowerCircles from '../images/flowerCircles.svg';
import {Jumbotron } from 'react-bootstrap';

class ElfHeader extends Component {

    render() {
        return (

            <div className='App'>
                <Jumbotron>
                    <div className='App-header'>
                        <img src={flowerCircles} className='App-logo' alt='logo'/>
                        <h2>Welcome to Prog272</h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default ElfHeader;
