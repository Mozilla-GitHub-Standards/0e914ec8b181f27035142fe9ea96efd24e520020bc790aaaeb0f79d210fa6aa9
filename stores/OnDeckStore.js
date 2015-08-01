'use strict';
import BaseStore from 'fluxible/addons/BaseStore';


export default class OnDeckStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.activeOnDeckItem = null;
    this.dispatcher = dispatcher;
    this.onDeckItems = [];
  }

  receiveOnDeckItems (payload) {
    this.onDeckItems = payload;
    this.emitChange();
  }

  setActiveOnDeckItem (id) {
    this.activeOnDeckItem = id;
    this.emitChange();
  }

  getAll () {
    return this.onDeckItems;
  }

  getActiveOnDeckItem () {
    return this.activeOnDeckItem;
  }

  dehydrate () {
    return {
      activeOnDeckItem: this.activeOnDeckItem,
      onDeckItems: this.onDeckItems
    }
  }

  rehydrate (state) {
    this.activeOnDeckItem = state.activeOnDeckItem;
    this.onDeckItems = state.onDeckItems;
  }
}

OnDeckStore.storeName = 'OnDeckStore';
OnDeckStore.handlers = {
  'RECEIVE_ONDECK_ITEMS': 'receiveOnDeckItems',
  'RECEIVE_ACTIVE_ONDECK_ITEM': 'setActiveOnDeckItem',
};
