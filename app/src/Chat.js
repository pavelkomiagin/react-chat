'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Chat extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>
             <div className='top_menu'>
               <TopButtons />
               <div className='title'>Chat</div>
             </div>
             <MessagesList />
             <BottomWrapper />
           </div>
  }
}

class TopButtons extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className='buttons'>
             <div className='button close'></div>
             <div className='button minimize'></div>
             <div className='button maximize'></div>
           </div>
  }
}

class MessagesList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <ul className='messages'></ul>
  }
}

class BottomWrapper extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className='bottom_wrapper clearfix'>
             <div className='message_input_wrapper'>
               <input type='text' className='message_input' placeholder='Type your message here...' />
             </div>
             <div className='send_message'>
               <div className='icon'></div>
               <div className='text'>Send</div>
             </div>
           </div>
  }
}