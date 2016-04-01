var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');
var Post = require('../models/blog-post');

router.route('/blog')
	.get(function(req, res){

		Post.find()
		.populate('author')
		.populate('comments')
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
		Post.findById(req.params.blog_id, function(err, post){
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

router.route('/blog/:blog_id/comment')
	.post(function(req, res){
		//created new comment; use blog id and user id
		var comment = new Comment();
		comment.body = req.body.body ? req.body.body : comment.body;
		comment.user = '56d49890f0ec372b04000001';
		comment.blog = req.params.blog_id;

		comment.save(function(err, comm){
			if (err){
				res.send(err)
			} else {
				//find blog by id & then push comment into comments array
				Post.findById(req.params.blog_id, function(err, post){
					if(err){
						res.send(err)
					} else {
						//comments = array on our blog-post schema
						post.comments.push(comm._id)
						post.save();
						res.json(comm);
					}
				})
			}
		})
	})




module.exports = router;	