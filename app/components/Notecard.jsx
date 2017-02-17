import React, { PropTypes } from 'react';

const Notecard = ({ msg }) => {
    return (
        <div className="notecard">
        <div><strong>Username</strong> @username</div>
        <div>{ msg }</div>
        <div>
                <img className="icon" src={require('./../assets/reply.png')}/>
                <img className="icon" src={require('./../assets/retweet.png')}/>
                <img id="heart" src={require('./../assets/heart.png')}/>
        </div>
        </div>
    );
}

Notecard.PropTypes = {
    msg: PropTypes.string
};

export default Notecard;
