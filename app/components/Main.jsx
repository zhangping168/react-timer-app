var React = require('react');
var Nav = require('Nav');

var Main = (props)=>{
  return(
    <div>
      <Nav/>
      <div className="row">
        <h1>Main</h1>
        <div className="columns medium-6 large-4 small-centered">
            {props.children}
        </div>
      </div>
    </div>
  );
};
module.exports = Main
