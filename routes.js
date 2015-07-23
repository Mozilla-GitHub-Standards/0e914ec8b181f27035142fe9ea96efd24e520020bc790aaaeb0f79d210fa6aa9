export default {
  activity: {
    path: '/',
    method: 'get',
    handler: require('./components/Activity'),
    label: 'Activity',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Activity' });
      done();
    }
  },
  roadmap: {
    path: '/roadmap',
    method: 'get',
    handler: require('./components/Roadmap'),
    label: 'Roadmap',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Roadmap' });
      done();
    }
  },
  ondeck: {
    path: '/ondeck',
    method: 'get',
    handler: require('./components/OnDeck'),
    label: 'On Deck',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'On Deck' });
      done();
    }
  }
};
