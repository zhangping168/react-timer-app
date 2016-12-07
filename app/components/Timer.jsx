var React = require('react');
var TimerClock = require('TimerClock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function(){
    return{
      countdownStatus:'stopped',
      count:0
    };
  },

  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
       var countdownStatus = this.state.countdownStatus;

      switch(countdownStatus){
        case 'started' :
        this.clockStart();

        this.setState({
          countdownStatus:'started'
        });
          break;
        case 'paused' :
          clearInterval(this.timer);
          this.timer = undefined;
          this.setState({
            countdownStatus:'paused'
          });
          break;
        case 'stopped' :
          clearInterval(this.timer);
          this.timer = undefined;
          this.setState({
            countdownStatus:'stopped',
            count:0
          });
          break;

      }
    }

  },

  clockStart: function(){
    this.timer = setInterval(()=>{
      var newCount = this.state.count + 1;

      this.setState({
        count:newCount >= 0 ? newCount : 0
      });

    },1000);
  },

  handleClockChange: function(){

  },
  handleStatusChange: function(newStatus){
      this.setState({countdownStatus:newStatus});
      console.log('countdownStatus',newStatus);
},

  render: function(){
    var {countdownStatus,count} = this.state;
    return (
        <div>
            <TimerClock count={count}/>
            <TimerControls onStatusChange={this.handleStatusChange} countdownStatus={countdownStatus}/>
        </div>
    );
  }
});

module.exports = Timer;
