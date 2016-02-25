var express = require('express');
var router = express.Router();

var Post = require('../models/blog-post');

router.route('/blog')
	.post(function(req, res){

		var post = new Post();
		post.author = req.body.author;
		post.title = req.body.title;
		post.content= req.body.content;

		post.save(function(err, post){
			if(err){
				console.log(err)
			} else {
				res.json(post)
			}
		});
	})
	.get(function(req, res){
		Post.find(function(err, post){
			if(err){
				console.log(err)
			} else {
				res.json(post)
			}
		});
	})

router.route('/blog/:blog_id')
	.get(function(req, res){
		Post.find(req.params.blog_id, function(err, post){
			if(err){
				console.log(err)
			} else {
				res.json(post)
			}
		});
	})
	.put(function(req, res){
		Post.findById(req.params.blog_id, function(err, post){
			if(err){
				console.log(err)
			} else {
				post.author = req.body.author ? req.body.author : post.author;
				post.title = req.body.title ? req.body.title : post.title;
				post.content = req.body.content ? req.body.content : post.content;

				post.save(function(err, post){
					if(err){
						console.log(err)
					} else {
						res.json({message: "post updated!"})
					}
				})
			}
		});
	})
	.delete(function(req, res){
		Post.remove({_id: req.params.blog_id}, function(err, post){
			if(err){
				console.log(err)
			} else {
				console.log(Post)
				res.json ({message: "post deleted!"})
			}
		});
	})





module.exports = router;	