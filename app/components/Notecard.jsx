import React, { PropTypes, Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Notecard extends Component {
  render() {
    return (
      <div className="notecard">
        <div><strong>Username</strong> @username</div>
        <div>{ this.props.msg }</div>
        <div>
          <div className="iconwrap"><img className="icon" src={require('./../assets/reply.png')}/></div>
          <div className="iconwrap"><img className="icon" src={require('./../assets/retweet.png')}/></div>
          <div className="iconwrap"><img id="heart" src={require('./../assets/heart.png')}/></div>
        </div>
      </div>
    )
  }
}

export default Notecard;