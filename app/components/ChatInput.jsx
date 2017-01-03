import React, {Component, PropTypes} from 'react';

class ChatInput extends Component {
  sendChat(event) {
    event.preventDefault();
    const msg = event.target.elements[0].value;

    $.post('/socket', { msg })
      .done(data => {
        console.log(data);
      })
      .fail(() => console.error('error with message'));
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.sendChat}>
          <div>
            <input type="text" className="form-control" name="msg" placeholder="" />
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