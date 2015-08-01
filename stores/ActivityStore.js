'use strict';
import BaseStore from 'fluxible/addons/BaseStore';


export default class ActivityStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;
    this.activity_items = [];
    this.active_activity_item = null;
  }

  receiveActivityItems (payload) {
    this.activity_items = payload;
    this.emitChange();
  }

  setActiveActivityItem (id) {
    this.active_activity_item = id;
    this.emitChange();
  }

  getAll () {
    return this.activity_items;
  }

  getActiveActivityItem () {
    return this.active_activity_item;
  }

  dehydrate () {
    return {
      activity_items: this.activity_items,
      active_activity_item: this.active_activity_item
    }
  }

  rehydrate (state) {
    this.activity_items = state.activity_items;
    this.active_activity_item = state.active_activity_item;
  }
}

ActivityStore.storeName = 'ActivityStore';
ActivityStore.handlers = {
  'RECEIVE_ACTIVITY_ITEMS': 'receiveActivityItems',
  'RECEIVE_ACTIVE_ACTIVITY_ITEM': 'setActiveActivityItem',
};
