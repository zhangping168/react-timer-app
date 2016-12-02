var React = require('react');

var Weather = React.createClass({
  getInitialState: function(){
    return{

    };
  },

  render: function(){

    return (
        <div>
          <h1 className="text-center page-title">Title here </h1>
          <p>Message paragraph</p>

        </div>
    );
  }
});

module.exports = Weather
