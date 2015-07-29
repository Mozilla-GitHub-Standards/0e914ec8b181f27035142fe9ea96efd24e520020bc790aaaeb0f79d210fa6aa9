var config = require('nconf');

var DEFAULTS = {
  PODIO_APP_ID: 6761871
};
var LOCAL = './config.local.json';

module.exports = config.argv().file({ file: LOCAL }).defaults(DEFAULTS);
