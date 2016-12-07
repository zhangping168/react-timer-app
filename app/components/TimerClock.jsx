var React = require('react');

var TimerClock = React.createClass({
  getDefaultProps:function(){
    return {
      count:0
    }
  },
  propTypes:{
    count:React.PropTypes.number
  },

  formatTimerClock: function(count){
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    seconds = seconds>=10 ? seconds : '0'+seconds;
    minutes = minutes>=10 ? minutes : '0'+minutes;

    return minutes + ':' + seconds;
  },

  render: function(){
    var {count} = this.props;
    return (
        <div className="clock">
          <span className="clock-text" ref="timerClock">{this.formatTimerClock(count)}</span>
        </div>
    );
  }
});

module.exports = TimerClock;
