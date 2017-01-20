import React from 'react';

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="nav">
            <a href="#">
                <img id="razor" src={require('./../assets/razor.png')} />
                <h1>razorChat</h1>
            </a>
            </div>
        </div>
    );
}

export default Navbar;