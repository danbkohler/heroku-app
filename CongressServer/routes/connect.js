/**
 * Created by bcuser on 6/5/17.
 */
const mongoose = require('mongoose');

const connect = {

    connected: false,

    simpleConnect: function() {
        'use strict';
        console.log('Connecting with simple.');
        const url = 'mongodb://127.0.0.1:27017/test';
        console.log(url);
        connect.connected = true;
        mongoose.connect(url);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    //username dank, password prog272
    custom: function() {
        'use strict';
        console.log('Connecting with simple.');
        //const url = 'mongodb://127.0.0.1:27017/test';
        const userName = 'charlie';
        const password = 'foobar';
        const siteAndPort = '192.168.2.18:27017';
        const databaseName = 'test';
        const url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        connect.connected = true;
        mongoose.connect(url);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    // mongodb://<dbuser>:<dbpassword>@ds049848.mlab.com:49848/elvenlab01
    //mongodb://<dbuser>:<dbpassword>@ds111622.mlab.com:11622/prog272dank
    mlabConnect: function() {
        'use strict';
        console.log('Connecting with mlab.');
        connect.connected = true;
        var userName = 'dank'; //pol
        var password = 'prog272'; //polFooBarQux
        var siteAndPort = 'ds111622.mlab.com:11622';
        var databaseName = 'prog272dank';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;

        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(option) {
        'use strict';
        if (typeof option === 'undefined') {
            option = 'simple';
        }

        switch (option) {
            case 'simple':
                connect.simpleConnect();
                break;
            case 'custom':
                connect.custom();
                break;
            case 'mlab':
                connect.mlabConnect();
                break;
            default:
                connect.simpleConnect();
        }
    }
};

module.exports = connect;