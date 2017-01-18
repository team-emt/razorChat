import React from 'react';

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="nav">
            <p><a href="#"><img id="razor" src={require('./../assets/razor.png')} />razorChat</a></p>
            </div>
        </div>
    );
}

export default Navbar;