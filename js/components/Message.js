'use strict';

var React = require('react');

class Message extends React.Component {
  render() {
    var positions = ['left', 'right'];
    var positionClassName = positions[this.props.position % 2];

    return (
      <li className={positionClassName + ' message appeared'}>
        <div className='avatar'></div>
        <div className='text_wrapper'>
          <div className='text'>{this.props.text}</div>
        </div>
      </li>
    );
  }
}

module.exports = Message;