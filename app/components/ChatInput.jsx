import React, { Component, PropTypes } from 'react';

class ChatInput extends Component {

  componentDidMount() {
    const textForm = document.getElementById('text-input-form');
    const textInput = document.getElementById('text-input-field');

    // Event emitter for new chat messages
    textForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const contents = textInput.value;
      rz.publish(contents, 'write', 'chatMsg');
      textInput.value = '';
    });
  }

  render() {
    return (
      <div className="form-chat">
        <form id="text-input-form" onSubmit={this.sendChat}>
          <div>
            <input type="text" id="text-input-field" className="input-chat" />
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

ChatInput.propTypes = {

};

export default ChatInput;