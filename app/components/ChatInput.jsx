import React, { PropTypes } from 'react';

const ChatInput = ({ inputValue, sendMsg, handleChange }) => {
  return (
    <div id="chat-wrap" className="form-chat">
      <form id="text-input-form" onSubmit={sendMsg}>
        <input type="text" id="text-input-field" className="input-chat" placeholder="What's on your mind?" value={inputValue} onChange={handleChange} />
      </form>
    </div>
  );
}

ChatInput.propTypes = {
  inputValue: PropTypes.string,
  sendMsg: PropTypes.func,
  handleChange: PropTypes.func
};

export default ChatInput;
