var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var router = express.Router();

var Contact = require('./models/contact');
var contactRouter = require('./routes/contact-me');

var Post = require('./models/blog-post')
var postRouter = require('./routes/post')

router.use(function(req, res, next){
	console.log('Something is happening');
	next();
});

router.get('/', function(req, res){
	res.json({message: "Good job Lauren!"})
});


app.get('/', function(req, res){
	res.render('index')
});
app.get('/about', function(req, res){
	res.render('about')
});


app.get('/blog', function(req, res){
	Post.find(function(err, data){
		if(err){
			console.log(err)
		} else {
			res.render('blog', {posts:data})
		}
	})
});

app.get('/contact', function(req,res){
	Contact.find(function(err, data){
		if(err){
			console.log(err)
		} else {
			res.render('contact', {contact: data})
		}
	})
});

app.use('/api', contactRouter);
app.use('/api',postRouter);

app.listen(port);
console.log("Cash money on port " + port);
