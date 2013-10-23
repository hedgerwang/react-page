/**
 * @jsx React.DOM
 */

var React = require('React');
var ReactPropTypes = require('ReactPropTypes');
var Clock = require('./Clock.js');

var ClockApp = React.createClass({
  propTypes: {
    runAtServer: ReactPropTypes.bool.isRequired,
    requestData: ReactPropTypes.object.isRequired
  },

  render: function() {
    var startTime = this.props.requestData.time;
    return (
      <div>
        <Clock startTime={startTime} />
      </div>
    );
  }
});

module.exports = ClockApp;
