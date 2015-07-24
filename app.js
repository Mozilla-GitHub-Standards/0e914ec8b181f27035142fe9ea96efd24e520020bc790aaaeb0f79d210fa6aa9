import React from 'react';
import Fluxible from 'fluxible';
import FetchrPlugin from 'fluxible-plugin-fetchr';

import Application from './components/Application';

import ActivityStore from './stores/ActivityStore';
import ApplicationStore from './stores/ApplicationStore';
import OnDeckStore from './stores/OnDeckStore';
import RoadmapStore from './stores/RoadmapStore';
import RouteStore from './stores/RouteStore';


let app = new Fluxible({
  component: Application,
  stores: [
    RouteStore,
    ApplicationStore,
    ActivityStore,
    OnDeckStore,
    RoadmapStore,
  ]
});

app.plug(FetchrPlugin({
  xhrPath: '/api'
}));

export default app
