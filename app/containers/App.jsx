import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/msgActions';

import Notecard from '../components/Notecard';
import Navbar from '../components/Navbar';
import ChatInput from '../components/ChatInput';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const rz = {
  publish: (contents, action, eventOut) => {
    let MSG;

    // 'contents' can either be the payload OR an object containing the necessary elements
    // i.e. contents = { content: 'abc', action: 'write', eventOut: 'chatBack' }
    if (typeof contents === 'object' && contents.contents) MSG = contents;
    else MSG = { contents, action, eventOut }
    socket.emit('msgSent', MSG);
  },
  subscribe: (event, callback) => {
    socket.on(event, callback);
  }
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  // set up socket listeners here
  componentDidMount() {
    rz.subscribe('dbOnLoad', (data) => {
      this.props.dbOnload(data);
    });

    rz.subscribe('chatMsg', (msg) => {
      this.props.chatMsg(msg);
    });
  }

  render() {
    let messageArray = [];
    this.props.messages.forEach((msg, i) => {
      messageArray.push(<Notecard key={ i } msg={ msg } />)
    });

    return (
      <div>
        <Navbar />
        <ChatInput 
          inputValue={this.props.inputValue}
          sendMsg={this.props.sendMsg}
          handleChange={this.props.handleChange}
           />
        { messageArray }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    messages: store.msg.messages,
    inputValue: store.msg.inputValue,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dbOnload: (data) => dispatch(actions.dbOnloadActionCreator(data)),
    chatMsg: (msg) => dispatch(actions.chatMsgActionCreator(msg)),
    sendMsg: (message) => dispatch(actions.sendMsgActionCreator(message)),
    handleChange: (letter) => dispatch(actions.handleChangeActionCreator(letter)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
