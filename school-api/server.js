var app = require('express')();
var HomeImages = require('./model/home-images');
var testRoutes = require('./routes/tests');

var bodyparser = require('body-parser');

var mongoose = require('mongoose');                      //  killa ll mongod 
var db = mongoose.connect('mongodb://localhost/school');    //  run in localhost db name: shop
var ObjectId = mongoose.Schema.Types.ObjectId;
var port = 3001;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.listen(port, function () {
    console.log('School API runnning on port:' + port)
});




/****************   Home Image   **************/
const isValidUrl = (string) => {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        console.log("url validation false string:" + string);
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}



/*********      Home events      ***********/

