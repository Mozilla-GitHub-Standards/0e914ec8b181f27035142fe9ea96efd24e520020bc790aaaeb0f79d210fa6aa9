'use strict';

var podio = require('../podio');

module.exports = {
  name: 'ondeck',
  read: function(req, resource, params, config, callback) {
    podio.ondeck().then(function(data) {
      callback(null, data);
    });
  }
};
