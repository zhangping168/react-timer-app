var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count:0,
      countdownStatus:'stopped'
    };
  },

  componentDidUpdate: function(prevPropsm, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
       var countdownStatus = this.state.countdownStatus;
       switch(countdownStatus){
         case 'started':
            this.timerStart();
            break;
        case 'stopped':
            clearInterval(this.timer);
            this.timer = undefined;
            this.setState({count:0});
            break;
        case 'paused':
            //stop the timer
            clearInterval(this.timer);
            this.timer = undefined;
            break;
       }
    }
  },

  componentWillMount: function(){

  },
  componentDidMount: function(){

  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  timerStart: function(){
     this.timer = setInterval(()=>{
       var newCount = this.state.count - 1;
       this.setState({
         count: newCount >= 0 ? newCount : 0
       })

       if(newCount == 0){
         clearInterval(this.timer);
         this.timer = undefined;
         this.setState({countdownStatus:'stopped'});
       }
     },1000);
  },

  handleCountdown: function(seconds){
    this.setState({
      count:seconds,
      countdownStatus:'started'
    });
  },
  handelStatusChange: function(newStatus){
    console.log('newStatus: '+newStatus);
    this.setState({countdownStatus:newStatus});
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var RenderControlsArea = ()=>{
      if(countdownStatus !== 'stopped'){
        //it should be paused or started
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handelStatusChange}/>;
      }else{
        return <CountdownForm onSetCountdown={this.handleCountdown}/>;
      }
    };
    return (
        <div>
          <h1 className="text-center">Countdown App</h1>
          <Clock totalSeconds={count} />
          {RenderControlsArea()}
        </div>
    );
  }
});

module.exports = Countdown;
