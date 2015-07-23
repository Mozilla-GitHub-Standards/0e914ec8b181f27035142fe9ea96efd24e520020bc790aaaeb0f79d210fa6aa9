var express = require('express');
var router = express.Router();

var podio = require('./podio');

function json(promise) {
  return function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    promise().then(function(data) {
      res.send(JSON.stringify(data));
    });
  }
}

router.get('/roadmap', json(podio.roadmap));
router.get('/activity', json(podio.activity));
router.get('/ondeck', json(podio.ondeck));

module.exports = router;
