'use strict';

var React = require('react');

class BottomWrapper extends React.Component {
  render() {
    return (
      <div className='bottom_wrapper clearfix'>
        <div className='message_input_wrapper'>
          <input type='text' className='message_input' placeholder='Type your message here...' />
        </div>
        <div className='send_message'>
          <div className='icon'></div>
          <div className='text'>Send</div>
        </div>
      </div>
    );
  }
}

module.exports = BottomWrapper;