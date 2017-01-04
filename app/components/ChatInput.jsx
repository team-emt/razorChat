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
      <div>
        <form id="text-input-form" className="form-inline" onSubmit={this.sendChat}>
          <div>
            <input type="text" id="text-input-field" className="form-control" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

ChatInput.propTypes = {

};

export default ChatInput;