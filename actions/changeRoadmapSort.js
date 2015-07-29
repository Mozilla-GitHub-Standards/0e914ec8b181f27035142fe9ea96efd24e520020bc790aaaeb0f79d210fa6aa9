'use strict';


export default (context, newSort, done) => {
  context.dispatch('CHANGE_ROADMAP_SORT', newSort);
  done();
}
