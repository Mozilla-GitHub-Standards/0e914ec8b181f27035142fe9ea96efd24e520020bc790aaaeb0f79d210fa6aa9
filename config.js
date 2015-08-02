var config = require('nconf');

var DEFAULTS = {
  MEMCACHE_PREFIX: 'JUGBAND_',
  MEMCACHE_TIMEOUT: 180,
  MEMCACHIER_SERVERS: 'localhost',
  PODIO_APP_ID: 6761871,
  PORT: 3000,
  USE_MEMCACHED: false
};
var LOCAL = './config.local.json';

module.exports = config.env().argv().file({ file: LOCAL }).defaults(DEFAULTS);
