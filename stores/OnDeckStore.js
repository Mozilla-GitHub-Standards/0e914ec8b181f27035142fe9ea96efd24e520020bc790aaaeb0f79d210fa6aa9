'use strict';
import BaseStore from 'fluxible/addons/BaseStore';


export default class OnDeckStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;
    this.onDeckItems = [];
  }

  receiveOnDeckItems (payload) {
    this.onDeckItems = payload;
    this.emitChange();
  }

  getAll () {
    return this.onDeckItems;
  }

  dehydrate () {
    return {
      onDeckItems: this.onDeckItems
    }
  }

  rehydrate (state) {
    this.onDeckItems = state.onDeckItems;
  }
}

OnDeckStore.storeName = 'OnDeckStore';
OnDeckStore.handlers = {
  'RECEIVE_ONDECK_ITEMS': 'receiveOnDeckItems',
};
