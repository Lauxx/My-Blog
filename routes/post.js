var express = require('express');
var router = express.Router();

var Post = require('../models/blog-post');

router.route('/blog')
	.get(function(req, res){

		Post.find()
		.populate('author')
		.exec(function(err, post){
			if(err){
				console.log(err)
			} else {
				res.json(post)
			}
		});
	})

	.post(function(req, res){
		// var user = req.user || "no user"; -THIS IS A TEST
		// console.log(user);
		var post = new Post();
		post.author = req.user._id || '56d49890f0ec372b04000001';
		post.title = req.body.title || 'none';
		post.content= req.body.content || 'none';
		post.date = req.body.date || 'none';

		console.log(post.author);

		post.save(function(err, post){
			if(err){
				console.log(err)
			} else {
				res.redirect('/blog')
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
				post.date = req.body.date ? req.body.date : post.date;

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