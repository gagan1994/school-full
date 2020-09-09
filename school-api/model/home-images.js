var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var home_images = new Schema({
    uri : String,
    description:String
});

module.exports = mongoose.model('HomeImages',home_images);