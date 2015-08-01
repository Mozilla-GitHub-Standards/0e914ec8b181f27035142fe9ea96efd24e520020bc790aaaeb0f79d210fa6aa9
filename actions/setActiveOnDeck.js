'use strict';

import OnDeckStore from '../stores/OnDeckStore';


export default (context, id, done) => {
  let store = context.getStore(OnDeckStore);
  let payload = (id == store.getActiveOnDeckItem()) ? null : id
  context.dispatch('RECEIVE_ACTIVE_ONDECK_ITEM', payload);
  done();
}
