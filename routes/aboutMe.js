var express = require('express');
var router = express.Router();
var AboutMe = require('../models/aboutMe');

router.route('/')
	.get(function(req, res){
		AboutMe.find(function(err, content){
			if(err){
				res.status(500).send(err, "Something broke on getting about me info");
			} else {
				res.json(content);
			}
		})
	})

	.post(function(req, res){
		var aboutMe = new AboutMe();

		aboutMe.content = req.body.content;
	})


router.route('/:_id')
	.put(function(req, res){
		AboutMe.find(req.params._id, function(err, content){

		})
	})


module.exports = router;	