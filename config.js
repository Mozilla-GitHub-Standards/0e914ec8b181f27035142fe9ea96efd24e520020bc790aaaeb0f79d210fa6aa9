var config = require('nconf');

module.exports = config.env().argv().defaults({
  PODIO_APP_ID: 6761871
});
