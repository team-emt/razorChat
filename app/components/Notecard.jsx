import React, { PropTypes } from 'react';

const Notecard = ({ msg }) => {
    return (
        <div className="notecard">
        <div><strong>Username</strong> @username</div>
        <div>{ msg }</div>
        <div>
            <div className="iconwrap"><img className="icon" src={require('./../assets/reply.png')}/></div>
            <div className="iconwrap"><img className="icon" src={require('./../assets/retweet.png')}/></div>
            <div className="iconwrap"><img id="heart" src={require('./../assets/heart.png')}/></div>
        </div>
        </div>
    );
}

Notecard.PropTypes = {
    msg: React.PropTypes.string
};

export default Notecard;