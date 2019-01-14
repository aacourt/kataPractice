var chai = require('chai');
var expect = chai.expect;
var TheFunction = require('../src/the-function');

describe('Test Name', function() {
  it('should do something', function() {
    var app = new TheFunction();
    expect(app.doSomething()).to.equal('');
  });
});