'use strict';

import RoadmapStore from '../stores/RoadmapStore';


export default (context, id, done) => {
  let store = context.getStore(RoadmapStore);
  let payload = (id == store.getActiveRoadmapItem()) ? null : id
  context.dispatch('RECEIVE_ACTIVE_ROADMAP_ITEM', payload);
  done();
}
