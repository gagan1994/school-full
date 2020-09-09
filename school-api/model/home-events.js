var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var home_events = new Schema({
    title : {type: String,  required: true},
    description:String
});

module.exports = mongoose.model('HomeEvents',home_events);