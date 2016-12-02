var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');

//load foundation-sites css
require('style!css!foundation-sites/dist/foundation.min.css');

//Load app.css
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <Router histroy={hashHistory}>

    <Route path="/" component={Main}>

      <IndexRoute component={Weather} />
    </Route>

  </Router>,
  document.getElementById('app')
);
