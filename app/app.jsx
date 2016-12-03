var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//load foundation-sites css
require('style!css!foundation-sites/dist/foundation.min.css');

//Load app.css
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <Router histroy={hashHistory}>

    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
        <Route path="/countdown" component={Countdown} />
    </Route>

  </Router>,
  document.getElementById('app')
);
