var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



//new stuff for authentication; configuring out app to tell it to use passport
app.use(session({
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use(flash());

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

app.use(function(req, res, next){
	var user = req.user || 'no user';
	console.log(user);
	next();
});



var port = process.env.PORT || 3000;
var router = express.Router();

var Contact = require('./models/contact');
var contactRouter = require('./routes/contact-me');
var BlogPost = require('./models/blogPost');
var blogPostRouter = require('./routes/blog_route');

router.use(function(req, res, next){
	console.log('Something is happening');
	next();
});



app.get('/', function(req, res){
	var user = req.user || " ";
	res.render('index', {user: user});
});





app.use('/api', contactRouter);
app.use('/api/blogPost', blogPostRouter);

app.listen(port);
console.log("Cash money on port " + port);

