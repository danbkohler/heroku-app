/**
 * Created by bcuser on 5/31/17.
 */
var mongoose = require('mongoose');

//Need to add more attributes...
var politicianSchema = mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'address': String
});

module.exports = mongoose.model('politician', politicianSchema);
