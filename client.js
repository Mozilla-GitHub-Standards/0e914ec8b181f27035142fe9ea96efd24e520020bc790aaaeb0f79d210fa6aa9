import { createElementWithContext } from 'fluxible-addons-react';
import app from './app';
import React from 'react';


const dehydratedState = window.App;
window.React = React;

app.rehydrate(dehydratedState, function (err, context) {
  if (err) {
    throw err;
  }
  window.context = context;
  const mountNode = document.getElementById('app');
  React.render(createElementWithContext(context), mountNode);
});
