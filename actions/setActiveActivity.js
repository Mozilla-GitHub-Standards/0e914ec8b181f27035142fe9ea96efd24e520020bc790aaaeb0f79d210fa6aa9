'use strict';

import ActivityStore from '../stores/ActivityStore';


export default (context, id, done) => {
  let store = context.getStore(ActivityStore);
  let payload = (id == store.getActiveActivityItem()) ? null : id
  context.dispatch('RECEIVE_ACTIVE_ACTIVITY_ITEM', payload);
  done();
}
