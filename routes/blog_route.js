var express = require('express');
var router = express.Router();
var BlogPost = require('../models/blogPost');


router.route('/')
	.get(function(req, res, next){
		BlogPost.find(function(err, post){
			if (err){
				res.status(500).send(err, "Something broke on getting blogposts");
				next();
			} else {
				res.json(post)
			}
		});
	})

	.post(function(req, res, next){
		var post = new BlogPost();

		post.author = '56f59f6d3a5b222703000003';
		post.title = req.body.title;
		post.content = req.body.content;
		post.date = req.body.date;

		post.save(function(err, post){
			if(err){
				res.status(500).send(err, "Something broke on posting a blog");
				next();
			} else {
				res.json(post)
			}
		});
	})

router.route('/:_id')
	.get(function(req, res, next){
		BlogPost.findById({_id: req.params._id}, function(err, post){
			if (err){
				res.status(500).send(err, "Something broke on getting single blog");
				next();
			} else {
				res.json(post)
			}
		});
	})

	.put(function(req, res, next){
		BlogPost.findById({_id: req.params._id}, function(err, update){
			if (err){
				res.status(500).send(err, "Something broke on PUTting the blog")
			} else {
				update.author = '56f59f6d3a5b222703000003';
				update.title = req.body.title ? req.body.title : update.title;
				update.content = req.body.content ? req.body.content : update.content;
				update.date = req.body.date ? req.body.date: update.date;

				update.save(function(err, post){
					if (err){
						res.status(500).send(err, "Something broke on saving a PUT")
					} else {
						res.json(post)
					}
				})
			}
		});
	})

	.delete(function(req, res, next){
		BlogPost.remove({_id: req.params._id}, function(err, post){
			if (err){
				res.status(500).send(err, "Something broke on delete a blog");
				next();
			} else {
				res.json({message: "Blog Deleted"})
			}
		});
	})

module.exports = router;