'use strict';
import BaseStore from 'fluxible/addons/BaseStore';


export default class ActivityStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;
    this.activity_items = [];
  }

  receiveActivityItems (payload) {
    this.activity_items = payload;
    this.emitChange();
  }

  getAll () {
    return this.activity_items;
  }

  dehydrate () {
    return {
      activity_items: this.activity_items
    }
  }

  rehydrate (state) {
    this.activity_items = state.activity_items;
  }
}

ActivityStore.storeName = 'ActivityStore';
ActivityStore.handlers = {
  'RECEIVE_ACTIVITY_ITEMS': 'receiveActivityItems',
};
