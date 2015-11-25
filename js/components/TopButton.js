'use strict';

var React = require('react');

class TopButton extends React.Component {
  render() {
    return <div className={this.props.type + ' button'}></div>
  }
}

module.exports = TopButton;