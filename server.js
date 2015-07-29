'use strict';
require('babel/register');
var express = require('express');
var bodyParser = require('body-parser')
var favicon = require('serve-favicon');
var serialize = require('serialize-javascript');
var navigateAction = require('fluxible-router').navigateAction;
var React = require('react');
var app = require('./app');
var api = require('./api');
var Html = React.createFactory(require('./components/Html'));
var createElement = require('fluxible-addons-react/createElementWithContext');


var server = express();
server.use('/public', express.static(__dirname + '/build'));
server.use(bodyParser.json({ type: 'application/*+json' }))

var fetchrPlugin = app.getPlugin('FetchrPlugin');
server.use('/api', api);
fetchrPlugin.registerService(require('./services/activity'));
fetchrPlugin.registerService(require('./services/ondeck'));
fetchrPlugin.registerService(require('./services/roadmap'));
server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

server.use(function (req, res, next) {
  var context = app.createContext({ req: req });
  context.executeAction(navigateAction, { url: req.url }, function (err) {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        next();
      } else {
        next(err);
      }
      return;
    }
    var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';
    var html = React.renderToStaticMarkup(Html({
      state: exposed,
      markup: React.renderToString(createElement(context)),
      context: context.getComponentContext()
    }));
    res.send(html);
  });
});

server.use(favicon(__dirname + '/assets/jug.png'));

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
