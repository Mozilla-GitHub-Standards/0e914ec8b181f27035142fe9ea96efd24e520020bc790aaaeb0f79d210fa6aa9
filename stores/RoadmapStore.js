'use strict';
import BaseStore from 'fluxible/addons/BaseStore';


export default class RoadmapStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;
    this.roadmapItems = [];
  }

  receiveRoadmapItems (payload) {
    this.roadmapItems = payload;
    this.emitChange();
  }

  getAll () {
    return this.roadmapItems;
  }

  dehydrate () {
    return {
      roadmapItems: this.roadmapItems
    }
  }

  rehydrate (state) {
    this.roadmapItems = state.roadmapItems;
  }
}

RoadmapStore.storeName = 'RoadmapStore';
RoadmapStore.handlers = {
  'RECEIVE_ROADMAP_ITEMS': 'receiveRoadmapItems',
};
