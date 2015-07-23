'use strict';
var ActivityStore = require('../stores/ActivityStore');


var updateActivities = (context, payload, done) => {
  context.service.read('activity', {}, {}, function (err, activity_items) {
    context.dispatch('RECEIVE_ACTIVITY_ITEMS', activity_items);
    done();
  });
}

export default (context, payload, done) => {
  var activityStore = context.getStore(ActivityStore);
  if (Object.keys(activityStore.getAll()).length === 0) {
    updateActivities(context, payload, done);
  } else {
    done();
  }
}
