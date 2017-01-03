import React, { PropTypes, Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <div className="nav">
                <p><a href="#"><img id="razor" src={require('./../assets/razor.png')} />razorChat</a></p>
                </div>
            </div>
        )
    }
}

export default Navbar;