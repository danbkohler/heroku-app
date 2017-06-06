var express = require('express');
var router = express.Router();
var allMongo = require('./all-mongo');
var connect = require('./connect');

//This is from "Some more code
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {title: 'CongressServer-Kohler2'});
});

function checkConnection() {
    if (!connect.connected) {
        connect.doConnection('mlab');
    }
}

router.get('/all-data', function(request, response){
    'use strict';
    console.log('AllData route is invoked');
    checkConnection();
    allMongo.getAllData(response);
});

router.get('/emptyCollection', function(request, response) {
    'use strict';
    checkConnection();
    allMongo.empty(response);
});

router.get('/insertValidCollection', function(request, response) {
    'use strict';
    console.log('Insert Valid Collection Called.');
    //response.status(200).send({result: 'Insert valid Collection'});
    checkConnection();
    allMongo.readDataAndInsert(response);
});

//Comment out some/all of the stuff below?
/* GET home page. */
/*
router.get('/', function(req, res, next) { 'use strict';
    res.render('index', {title: 'CongressServer-Kohler'});
});
*/

router.get('/bar', function(request, response) {
    response.status(200).send({result: 'bar'});
});

router.get('/bar/:id', function(request, response) {
    'use strict';
    response.status(200).send({param: request.params.id, query: request.query});
});

/*
router.get('/insertValidCollection', function(request, response) {
    response.status(200).send({result: 'insertValidCollection'});
});
*/

module.exports = router;
