define(function(require, exports, module) {
  var all = require('./data-name')
 
  module.exports = function(num) {
  	window.console.log(111, num);
  	return all;
  }
});
