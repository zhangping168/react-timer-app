var React = require('react');

var TimerClock = React.createClass({

  render: function(){

    return (
        <div className="clock">
          <span className="clock-text" ref="timerClock">0</span>
        </div>
    );
  }
});

module.exports = TimerClock;
