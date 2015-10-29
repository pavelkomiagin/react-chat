'use strict';

var React = require('react');
var TopButton = require('./TopButton');

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

module.exports = TopButtons;