import React, { PropTypes } from 'react';

const ChatInput = ({ inputValue, sendChat, handleChange }) => {
  return (
    <div className="form-chat">
      <form id="text-input-form" onSubmit={sendChat}>
        <div>
          <input type="text" id="text-input-field" className="input-chat" value={inputValue} onChange={handleChange} />
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

ChatInput.propTypes = {
  inputValue: React.PropTypes.string,
  sendChat: React.PropTypes.func,
  handleChange: React.PropTypes.func
};

export default ChatInput;
