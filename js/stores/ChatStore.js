'use strict';

var ChatDispatcher = require('../dispatcher/ChatDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var messages = [
  {
    text: 'Hello world!'
  }, {
    text: 'Yep, hello!'
  }
];

var ChatStore = assign({}, EventEmitter.prototype, {
  getAllMessages() {
    return messages;
  },

  emitChange() {
    this.emit('change');
  }
});

ChatDispatcher.register((action) => {
  switch(action.actionType) {
    case 'ADD_MESSAGE':
      var message = action.text.trim();
      if (message.length) {
        message.push(message);
        ChatStore.emitChange();
      }
      break;

    default:
      break;
  }
});

module.exports = ChatStore;