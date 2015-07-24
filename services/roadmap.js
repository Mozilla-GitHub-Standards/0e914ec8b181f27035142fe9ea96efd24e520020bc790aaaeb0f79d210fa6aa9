'use strict';

var podio = require('../podio');

module.exports = {
  name: 'roadmap',
  read: function(req, resource, params, config, callback) {
    podio.roadmap().then(function(data) {
      callback(null, data);
    });
  }
};
