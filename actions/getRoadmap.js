'use strict';
var RoadmapStore = require('../stores/RoadmapStore');


var updateRoadmap = (context, payload, done) => {
  context.service.read('roadmap', {}, {}, function (err, roadmapItems) {
    context.dispatch('RECEIVE_ROADMAP_ITEMS', roadmapItems);
    done();
  });
}

export default (context, payload, done) => {
  var roadmapStore = context.getStore(RoadmapStore);
  if (Object.keys(roadmapStore.getAll()).length === 0) {
    updateRoadmap(context, payload, done);
  } else {
    done();
  }
}
