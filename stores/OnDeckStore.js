'use strict';
import BaseStore from 'fluxible/addons/BaseStore';


export default class OnDeckStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;
    this.onDeckItems = [];
  }

  receiveOnDeckItems (payload) {
    console.log('OnDeckStore.receiveOnDeckItems()');
    this.onDeckItems = payload;
    this.emitChange();
  }

  getAll () {
    console.log('OnDeckStore.getAll()');
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
