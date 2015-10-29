'use strict';

var React = require('react');
var TopButtons = require('./TopButtons');
var ChatTitle = require('./ChatTitle');

class TopMenu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='top_menu'>
        <TopButtons />
        <ChatTitle />
      </div>
    );
  }
}

module.exports = TopMenu;