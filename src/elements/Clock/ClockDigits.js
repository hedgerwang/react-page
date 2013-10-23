
/**
 * @jsx React.DOM
 */

var React = require('React');
var ReactPropTypes = require('ReactPropTypes');
var ClockFlipBoard = require('./ClockFlipBoard.js');

var ClockDigits = React.createClass({
  propTypes: {
    value: ReactPropTypes.number.isRequired,
    label: ReactPropTypes.string
  },

  render: function() {
    var value = String(this.props.value);
    value = value.length < 2 ? '0' + value : value;
    value = value.length > 2 ? value.substr(0, 2) : value;
    return (
      <div className="ClockDigits_root">
        <div className="ClockDigits_label">{this.props.label}</div>
        <ClockFlipBoard value={value} />
      </div>
    );
  }
});

module.exports = ClockDigits;
