var React = require('react');
var TimerClock = require('TimerClock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function(){
    return{
      countdownStatus:'stopped'
    };
  },

  handleStatusChange: function(newStatus){
      this.setState({countdownStatus:newStatus});
      console.log('countdownStatus',newStatus);

  },

  render: function(){
    var {countdownStatus} = this.state;
    return (
        <div>
            <TimerClock />
            <TimerControls onStatusChange={this.handleStatusChange} countdownStatus={countdownStatus}/>
        </div>
    );
  }
});

module.exports = Timer;
