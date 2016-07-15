var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session()); 

 // mlab code for heroku
var uriUtil = require('mongodb-uri');

var options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/blog";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

//console.log(mongooseUri);

mongoose.connect(mongooseUri, options, function(err, data){
  if(err){
    console.log('connection error', err)
  } else {
    console.log('connection', data);
  }
}); 


var port = process.env.PORT || 3000;
var router = express.Router();



router.use(function(req, res, next){
	console.log('Something is happening');
	next();
});


app.listen(port);
console.log("Cash money on port " + port);

