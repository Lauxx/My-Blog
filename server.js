var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

app.set('view engine', 'ejs');

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
	res.render('blog')
});

app.get('/contact', function(req, res){
	res.render('contact')
});



app.listen(port);
console.log("Cash money on port " + port);
