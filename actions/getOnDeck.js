'use strict';
var OnDeckStore = require('../stores/OnDeckStore');


var updateOnDeck = (context, payload, done) => {
  context.service.read('ondeck', {}, {}, function (err, onDeckItems) {
    context.dispatch('RECEIVE_ONDECK_ITEMS', onDeckItems);
    done();
  });
}

export default (context, payload, done) => {
  var onDeckStore = context.getStore(OnDeckStore);
  if (Object.keys(onDeckStore.getAll()).length === 0) {
    updateOnDeck(context, payload, done);
  } else {
    done();
  }
}
