'use strict';

var React = require('react');

class ChatApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <TopMenu />
        <MessagesList />
        <BottomWrapper />
      </div>
    );
  }
}

module.exports = ChatApp;

