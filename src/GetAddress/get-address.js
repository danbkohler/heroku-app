/**
 * Created by bcuser on 5/7/17.
 */
var fs=require("fs");
var debug = require('debug')('get-address');

debug('Testing debug');

//node get-address.js

function readFile(fileName, callback) {
    'use strict';
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, 'utf8', function(err, fileContents) {
                if (err) {
                    reject(err);
                }
                resolve({
                    'result': fileContents
                });
            });
        });
    } else {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                throw (err);
            }
            callback({
                'result': fileContents
            });
        });
    }
}

function getAddress(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char) -1);
}
//lastIndexOf(char) has char set to W in the readfile,
//So it stops reading address once you get to "W" for Washington

function getZip(value, char) {
    'use strict';
    // YOU WRITE IT
    // ITS THE SAME SINGLE CALL AS GET ADDRESS, BUT INDEXES ARE DIFFERENT
    return value.substring(value.length - 10);
}
//Address.json uses 10 char zips, all at end of address line

function getCity(value, char, len) {
    'use strict';
    var start = value.lastIndexOf(char);
    return value.substring(start, start + len);
}

function writeIt(label, value, noComma) {
    var comma = noComma ? '"' : '",';
    console.log('\t' + label, '"'+ value + comma)
};

readFile('address.json').then(function(text) {
    debug(text);
    var json = JSON.parse(text.result);
    debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));
    var gitUser = [];
    const unknown = 'unknown';
    for (var i = 0; i < json.objects.length; i++) {
        console.log('{');
        writeIt('firstName:', json.objects[i].person.firstname);
        // GET LAST NAME
        //DK Adding lastName writeIt
        writeIt('lastName:', json.objects[i].person.lastname);
        writeIt('street:', getAddress(json.objects[i].extra.address, 'W'));
        // CITY STATE ZIP PHONE WEBSITE
        //DK Adding City WiP (currently shows wrong info)
        writeIt('city:', getCity(json.objects[i].extra.address, 'W'));
        writeIt('state:', json.objects[i].state);
        writeIt('zip:', getZip(json.objects[i].extra.address, 'C'));
        writeIt('phone:', json.objects[i].phone);
        writeIt('website:', json.objects[i].website);
        writeIt('email:', '');
        writeIt('contact:', json.objects[i].extra.contact_form || '', true);
        console.log('},');
    }
    //console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
    debug('all done');
});