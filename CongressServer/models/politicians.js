/**
 * Created by bcuser on 5/31/17.
 */
var mongoose = require('mongoose');

//Can remove attributes if there are some no longer needed
var politicianSchema = mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'street': String,
    'city': String,
    'state': String,
    'zip': String,
    'phone': String,
    'website': String,
    'email': String,
    'contact': String
});

module.exports = mongoose.model('politician', politicianSchema);
