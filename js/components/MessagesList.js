'use strict';

var React = require('react');
var Message = require('./Message');
var ChatStore = require('../stores/ChatStore');

class MessagesList extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ChatStore.getAllMessages()
    }
  }

  render() {
    var messages = this.state.messages.map((message, index) => {
      return <Message key={index} text={message.text} position={index} />
    });

    return <ul className='messages'>{messages}</ul>
  }
}

module.exports = MessagesList;