var config = require('nconf');

var DEFAULTS = {
  PODIO_APP_ID: 6761871,
  PORT: 3000
};
var LOCAL = './config.local.json';

module.exports = config.env().argv().file({ file: LOCAL }).defaults(DEFAULTS);
