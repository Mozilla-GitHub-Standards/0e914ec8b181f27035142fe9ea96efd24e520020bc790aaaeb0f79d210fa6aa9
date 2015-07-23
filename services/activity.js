'use strict';

var podio = require('../podio');

module.exports = {
  name: 'activity',
  read: function(req, resource, params, config, callback) {
    podio.activity().then(function(data) {
      callback(null, data);
    });
  }
};
