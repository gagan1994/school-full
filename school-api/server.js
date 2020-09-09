var app = require('express')(); 
var HomeImages = require('./model/home-images');
var testRoutes = require('./routes/tests');

var bodyparser = require('body-parser');

var mongoose = require('mongoose');                      //  killall mongod 
var db = mongoose.connect('mongodb://localhost/school');    //  run in localhost db name: shop
var ObjectId = mongoose.Schema.Types.ObjectId;
var port=3001;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.listen(port,function(){
    console.log('School API runnning on port:'+ port)
});

app.use('/home_images',)



/****************   Home Image   **************/
const isValidUrl=(string)=> {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        console.log("url validation false string:"+string);
        return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}


app.post('/home_images',function(req,res){
    console.log('/home_images:Post body',req.body);
    var homeImages=[];
    var images=req.body;
    if(images.length>4||images.length==0){
        res.status(500).send({error: "image size should be max 4 andmin 0"});
        return;  
    }
    for(var x in images){
        if(!isValidUrl(images[x].uri)){
            res.status(500).send({error: "Url is not valid "+images[x]});
            return;
        }
        var ima = new HomeImages({  uri:images[x].uri,description:null});
        homeImages.push(ima);
    }
    HomeImages.deleteMany({},(err, result)=>{
        if(!err){
            HomeImages.insertMany(homeImages, (err, docs) => {
                if (err) { 
                    res.status(500).send({error: "Error toinsert into db "+err});
                }else{
                    HomeImages.find({},function(err , products){
                        console.log('HomeImages:'+products);
                        if(err){
                            res.status(500).send({error: "Could not fetch HomeImages"});
                        }else{
                            res.send(products);
                        }
                    });
                }
            });
        }else{
            res.status(500).send({error:"Ingredient not fund"})
        }
    });


});


app.get("/home_images",function(req,res){
    HomeImages.find({}).exec(function(err,homeImages){
        if(err){
            res.status(500).send({err: "cannot get wishlist"});
        } else {
            res.send(homeImages);
        }
    });
});

app.delete("/home_image/:image_id",function(req,res){
    var image_id=req.params.image_id;

    console.log("id:"+image_id)
    if(!image_id||image_id==""){
        res.status(500).send({error:"Image id cannot be empty"});
    }else{
        HomeImages.deleteOne({_id:image_id},(err, result)=>{
            if(!err){
                res.send("Deleted Image:"+image_id);            
            }else{
                res.status(500).send({error:"Ingredient not fund"})
            }
        });
    }
});

app.delete("/home_images/",function(req,res){
    var image_ids=req.body;
    console.log("ids:",image_ids)
    if(!image_ids||image_ids.length==0){
        res.status(500).send({error:"Image ids cannot be empty"});
    }else{
        var query={_id:{$in:image_ids}}

        HomeImages.deleteMany(query,(err, result)=>{
            if(!err){
                res.send(image_ids);            
            }else{
                res.status(500).send({error:"image_ids not fund"+err})
            }
        });
    }
});



/*********      Home events      ***********/

