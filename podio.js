var format = require('util').format;
var Podio = require('podio-js').api;
var Promise = require('bluebird');
var url = require('url');

var config = require('./config');

var podio = new Podio({
  authType: 'password',
  clientId: config.get('PODIO_ID'),
  clientSecret: config.get('PODIO_SECRET')
});

var FILTERS = {
  ACTIVITY: {
    'limit': 100,
    'sort_by': 52590680,  // Phase
    'filters': {
        '52590680': [3,4,5,6],  // Phase: All the phases except Concept, Define and Complete.
        '86551352': [2],  // Roadmap Status: Active
        '52603290': [3]  // Team: Marketplace
    }
  },
  ONDECK: {
    'limit': 100,
    'filters': {
      '86551352': [2],  // Roadmap Status: Active
      '52590680': [1, 2],  // Phase: Concept and Define
      '52603290': [3]  // Team: Marketplace
    }
  },
  ROADMAP: {
    'limit': 150,
    'filters': {
      '52590680': [1,2,3,4,5,6],  // Phase: Everything except Cancelled and Complete
      '52603290': [3]  // # Team: Marketplace
    }
  }
};


// Resolves to an authenticated Podio client instance.
function PodioAuthenticate() {
  return new Promise(function(resolve, reject) {
    podio.isAuthenticated().then(function() {
      resolve(podio);
    }).catch(function(err) {
      var user = config.get('PODIO_USERNAME');
      var pass = config.get('PODIO_PASSWORD');
      try {
        podio.authenticateWithCredentials(user, pass, function() {
          resolve(podio);
        });
      } catch(err) {
        reject(err);
      }
    });
  });
}


// Reformats a Podio item listing to something a little less verbose and more
// consumable by our client.
// http://www.lovine.com/hobbes/comics/chimage.php?image=transmogrifier2.gif
var transmogrify = function(data) {
  var results = [];
  data['items'].forEach(function(old, index) {
    var item = {};
    item['name'] = old['title'];
    item['podio_link'] = old['link'];
    old['fields'].forEach(function(field, index) {
      switch (field['type']) {
        case 'date':
          if ('start_date' in field['values'][0]) {
            var label = format('%s_start', field['label']);
            item[label] = field['values'][0]['start_date']
          }
          if ('end_date' in field['values'][0]) {
            var label = format('%s_end', field['label']);
            item[label] = field['values'][0]['end_date']
          }
          break;
        case 'progress':
        case 'text':
          item[field['label']] = field['values'][0]['value']
          break;
        case 'app':
        case 'category':
          if (field['values'].length === 1) {
            item[field['label']] = field['values'][0]['value']['text']
          } else {
            item[field['label']] = []
            field['values'].forEach(function(value, index) {
                item[field['label']].push(value['value']['text'])
            })
          }
          break;
        case 'embed':
          item[field['label']] = field['values'][0]['embed']['url']
          break;
        case 'number':
          item[field['label']] = int(field['values'][0]['value'])
          break;
      }
    });
    results.push(item);
  });
  return results;
};


// Passed a filter object, returns a promise that resolves to the
// transmogrified results of a Podio item search with those filters.
function PodioRequest(filters) {
  return new Promise(function(resolve, reject) {
    PodioAuthenticate().then(function(client) {
      var url = format('/item/app/%d/filter/', config.get('PODIO_APP_ID'));
      var request = client.request('POST', url, filters).then(function(response) {
        resolve(transmogrify(response));
      });
    }).catch(function(err) {
      reject(err);
    });
  });
}


// Curries the PodioRequest function with a specific set of filters.
var ondeck = function() { return PodioRequest(FILTERS.ONDECK); };
var roadmap = function() { return PodioRequest(FILTERS.ROADMAP); }
var activity = function() { return PodioRequest(FILTERS.ACTIVITY); };


module.exports = {
  PODIO_FILTERS: FILTERS,
  activity: activity,
  ondeck: ondeck,
  roadmap: roadmap
};
