import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Notecard from './components/Notecard';
import Navbar from './components/Navbar';
import ChatInput from './components/ChatInput';
import styles from './scss/application.scss';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const rz = {
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
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      inputValue: ''
    };
    this.sendChat = this.sendChat.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    rz.subscribe('dbOnLoad', (data) => {
      let copy = Object.assign({}, this.state, { messages : data.reverse() })
      this.setState(copy);
    });

    rz.subscribe('chatMsg', (msg) => {
      console.log('socket hit');
      let copy = Object.assign({}, this.state);
      copy.messages.unshift(msg);
      this.setState(copy);
    });
  }

  sendChat(msg) {
    msg.preventDefault();
    rz.publish(this.state.inputValue, 'write', 'chatMsg');
    let copy = Object.assign({}, this.state);
    copy.inputValue = '';
    this.setState(copy);
  }

  handleChange(event) {
    let copy = Object.assign({}, this.state);
    copy.inputValue = event.target.value;
    this.setState(copy);
  }

  render() {
    let messageArray = [];
    this.state.messages.forEach((msg, i) => {
      messageArray.push(<Notecard key={ i } msg={ msg } />)
    });

    return (
      <div>
        <Navbar />
        <ChatInput 
          inputValue={this.state.inputValue}
          sendChat={this.sendChat} 
          handleChange={this.handleChange}
           />
        { messageArray }
      </div>
    )
  }
}

render (<App />,document.getElementById('app'));
