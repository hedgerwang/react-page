/**
 * @jsx React.DOM
 */

var ClockApp = require('./elements/Clock/ClockApp.js');
var React = require('React');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');

var index = React.createClass({
  render: function() {
    var runAtServer = typeof document === 'undefined';
    var requestData = {time: Date.now()};
    return (
      <SiteBoilerPlate>
        <link rel="stylesheet" href="/elements/Clock/Clock.css" />
        <link rel="stylesheet" href="/elements/Clock/ClockDigits.css" />
        <link rel="stylesheet" href="/elements/Clock/ClockFlipBoard.css" />
        <ClockApp runAtServer={runAtServer} requestData={requestData} />
      </SiteBoilerPlate>
    );
  }
});

module.exports = index;
