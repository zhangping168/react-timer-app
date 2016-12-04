var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', ()=>{
  it('should exists', ()=>{
    expect(Clock).toExist();
  });

  it('should render clock',()=>{
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    var expectedResult = '01:02';
    //Convert React component to jQuery object
    var $el = $(ReactDOM.findDOMNode(clock));
    var result = $el.find('.clock-text').text();
    expect(result).toBe(expectedResult);
  });

  it('formatSeconds',()=>{
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 615;
    var expected='10:15';
    var result = clock.formatSeconds(seconds);
    expect(result).toBe(expected);
  });

  it('formatSeconds with min/sec less than 10',()=>{
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 61;
    var expected='01:01';
    var result = clock.formatSeconds(seconds);
    expect(result).toBe(expected);
  });
});
