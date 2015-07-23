import React from 'react';
import Fluxible from 'fluxible';

import Application from './components/Application';

import ApplicationStore from './stores/ApplicationStore';
import PageStore from './stores/PageStore';
import RouteStore from './stores/RouteStore';


export default new Fluxible({
  component: Application,
  stores: [
    RouteStore,
    ApplicationStore,
    PageStore
  ]
});
