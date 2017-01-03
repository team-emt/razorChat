import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Notecard from './components/Notecard';
import Navbar from './components/Navbar';
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
      messages: []
    };

  }

  componentDidMount() {
    rz.subscribe('dbOnLoad', (data) => {
      let copy = Object.assign({}, this.state, {messages : data.reverse()})
      this.setState(copy);
    });

    rz.subscribe('chatMsg', (msg) => {
      console.log('socket hit');
      let copy = Object.assign({}, this.state);
      copy.messages.unshift(msg);
      this.setState(copy);
    });
  }

  render() {
    let messageArray = [];
    this.state.messages.forEach((msg, i) => {
      messageArray.push(<Notecard key={ i } msg={ msg } />)
    });

    return (
      <div>
        <Navbar />
        { messageArray }
      </div>
    )
  }
}

render (<App />,document.getElementById('app'));