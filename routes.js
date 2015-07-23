import getActivity from './actions/getActivity';


export default {
  activity: {
    path: '/',
    method: 'get',
    handler: require('./components/handlers/Activity'),
    label: 'Activity',
    action (context, payload, done) {
      context.executeAction(getActivity, {}, done);
    }
  },
  roadmap: {
    path: '/roadmap',
    method: 'get',
    handler: require('./components/handlers/Roadmap'),
    label: 'Roadmap',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Roadmap' });
      done();
    }
  },
  ondeck: {
    path: '/ondeck',
    method: 'get',
    handler: require('./components/handlers/OnDeck'),
    label: 'On Deck',
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'On Deck' });
      done();
    }
  }
};
