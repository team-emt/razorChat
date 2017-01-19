import React, { PropTypes } from 'react';

const ChatInput = ({ inputValue, sendMsg, handleChange }) => {
  return (
    <div className="form-chat">
      <form id="text-input-form" onSubmit={sendMsg}>
        <div>
          <input type="text" id="text-input-field" className="input-chat" value={inputValue} onChange={handleChange} />
          <button type="submit" className="submit-button">Submit</button>
        </div>
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
