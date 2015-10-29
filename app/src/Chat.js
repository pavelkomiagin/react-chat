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
               <div className='buttons'>
                 <div className='button close'></div>
                 <div className='button minimize'></div>
                 <div className='button maximize'></div>
               </div>
               <div className='title'>Chat</div>
             </div>
             <MessagesList />
             <BottomWrapper />
           </div>
  }
}

class MessagesList extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          text: 'Hello world!'
        }, {
          text: 'Yep, hello!'
        }
      ]
    }
  }
  
  render() {
    var messages = this.state.messages.map((message, index) => {
      return <Message key={index} text={message.text} position={index} />
    });
    
    return <ul className='messages'>{messages}</ul>
  }
}

class Message extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    var positions = ['left', 'right'];
    var positionClassName = positions[this.props.position % 2];
    
    return <li className={positionClassName + ' message appeared'}>
             <div className='avatar'></div>
             <div className='text_wrapper'>
               <div className='text'>{this.props.text}</div>
             </div>
           </li>
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
