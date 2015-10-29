'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Chat extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return <div>
             <TopMenu />
             <MessagesList />
             <BottomWrapper />
           </div>
  }
}

class TopMenu extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return <div className='top_menu'>
             <TopButtons />
             <ChatTitle />
           </div>
  }
}

class TopButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      buttons: [ 'close', 'minimize', 'maximize' ]
    }
  }
  
  render() {
    var buttons = this.state.buttons.map((button, index) => {
      return <TopButton key={index} type={button} />
    });
    
    return <div className='buttons'>{buttons}</div>
  }
}
                                         
class TopButton extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return <div className={this.props.type + ' button'}></div>
  }
}
  
class ChatTitle extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return <div className='title'>Chat</div>
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
