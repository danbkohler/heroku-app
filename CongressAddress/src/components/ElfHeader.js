/**
 * Created by bcuser on 5/7/17.
 */
import React, {Component} from 'react';
import blooming from '../images/blooming.svg';


class ElfHeader extends Component {

    render() {
        return (

            <div className="App">

                <div className="App-header">
                    <img src={blooming} className="App-logo" alt="logo"/>
                    <h2>Welcome to Prog272</h2>
                </div>

            </div>
        );
    }
}

export default ElfHeader;