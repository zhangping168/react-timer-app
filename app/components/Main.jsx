var React = require('react');
var Nav = require('Nav');

var Main = (props)=>{
  return(
    <div>
      <Nav/>
      <div className="row">
        <h1>Main</h1>
        <div className="">
            {props.children}
        </div>
      </div>
    </div>
  );
};
module.exports = Main
