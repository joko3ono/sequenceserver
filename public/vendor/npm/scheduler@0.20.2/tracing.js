/* */ 
(function(process) {
  'use strict';
  if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/scheduler-tracing.production.min');
  } else {
    module.exports = require('./cjs/scheduler-tracing.development');
  }
})(require('process'));
