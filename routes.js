import getActivity from './actions/getActivity';
import getOnDeck from './actions/getOnDeck';
import getRoadmap from './actions/getRoadmap';


export default {
  activity: {
    path: '/',
    method: 'get',
    handler: require('./components/handlers/Activity'),
    label: 'Activity',
    action (context, payload, done) {
      context.executeAction(getActivity, {}, done);
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Activity | Jugband' });
    }
  },
  roadmap: {
    path: '/roadmap',
    method: 'get',
    handler: require('./components/handlers/Roadmap'),
    label: 'Roadmap',
    action (context, payload, done) {
      context.executeAction(getRoadmap, {}, done);
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Roadmap | Jugband' });
    }
  },
  ondeck: {
    path: '/ondeck',
    method: 'get',
    handler: require('./components/handlers/OnDeck'),
    label: 'On Deck',
    action (context, payload, done) {
      context.executeAction(getOnDeck, {}, done);
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'On Deck | Jugband' });
    }
  }
};
