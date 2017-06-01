var express = require('express');
var router = express.Router();
//var allMongo = require('./all-mongo');
//var connect = require('./connect');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
    res.render('index', {title: 'CongressServer-Kohler'});
});

router.get('/bar', function(request, response) {
    response.status(200).send({result: 'bar'});
});

router.get('/bar/:id', function(request, response) {
    'use strict';
    response.status(200).send({param: request.params.id, query: request.query});
});

router.get('/insertValidCollection', function(request, response) {
    response.status(200).send({result: 'insertValidCollection'});
});

module.exports = router;
