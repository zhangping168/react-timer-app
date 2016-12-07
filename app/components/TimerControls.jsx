var React = require('react');

var TimerControls = React.createClass({
  propTypes:{
    countdownStatus:React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus){
    return ()=>{
      this.props.onStatusChange(newStatus);
    }
  },
  render: function(){
    var {countdownStatus} = this.props;
    var renderStopStartButtons = ()=>{
      if(countdownStatus === 'paused'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }else if(countdownStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else if(countdownStatus === 'stopped'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    return (
        <div className="controls">
          {renderStopStartButtons()}
          <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
        </div>
    );
  }
});

module.exports = TimerControls;
