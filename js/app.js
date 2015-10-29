'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ChatApp = require('./components/ChatApp');

ReactDOM.render(
  <ChatApp />,
  document.querySelector('.chat_window')
);