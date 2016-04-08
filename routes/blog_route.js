var express = require('express');
var router = express.Router();
var BlogPost = require('../models/blogPost');
var Comments = require('../models/comments');

//'/api/blogPost'

router.route('/')
//this route gets all blog posts
	.get(function(req, res){
		BlogPost.find()
			.populate({
			path: 'comments',
			populate: {
				path: 'user',
				select: 'local.username',
			}
		})
			.exec(function(err, post){
			if (err){
				res.status(500).send(err, "Something broke on getting blogposts");
			} else {
				res.json(post)
			}
		});
	})
//this route allows you to post a blog
	.post(function(req, res, next){
		var post = new BlogPost();

		post.author = req.body.author || '5707e59e38781d370991af27';
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
//this route allows you to get one blog post by id and returns all of its comments
	.get(function(req, res){
		BlogPost.findById({_id: req.params._id})
		.populate({
			path: 'comments',
			populate: {
				path: 'user',
				select: 'local.username',
			}
		})
		.exec(function(err, post){
			if (err){
				res.status(500).send(err, "Something broke on getting single blog");
				
			} else {
				res.json(post)
			}
		});
	})
//this route allows you to update a current blog
	.put(function(req, res, next){
		BlogPost.findById({_id: req.params._id}, function(err, update){
			if (err){
				res.status(500).send(err, "Something broke on PUTting the blog")
			} else {
				update.author = req.body.author || '5707e59e38781d370991af27';
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
//this route deletes a single blog based on id
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



router.route('/:_id/comment')
// this route allows you to post a comment specific to a blog id
	.get(function(req, res){
		BlogPost.findById({ _id: req.params._id })
			.populate({
				path: 'comments',
				populate: {
					path: 'user', 
					select: 'local.username'
				}
			})
			.exec(function(err, comments){
				if(err){
					res.status(500).send(err, "Something broke on getting comments");
				} else {
					res.json(comments.comments)
				}
			});
	})



	.post(function(req, res, next){
		var userId = req.user ? req.user._id : "55707e59e38781d370991af27";
		var comment = new Comments();

		comment.body = req.body.body;
		comment.date = req.body.date;
		comment.blog = req.params._id;
		comment.user = req.user._id; 

		comment.save(function(err, comment){
			if(err){
				res.status(500).send(err, "Something broke on saving a comment");
			} else {
				BlogPost.findById(req.params._id, function(err, post){
					if(err){
						res.status(500).send(err, "Something broke on saving comment to blogpost")
					} else {
						post.comments.push(comment._id);
						post.save();
						res.json(comment);
					}
				})
			}
		});
	})





// router.route('/comment/:comment_id')
// 	.delete(function(req, res){
// 		Comments.remove({ comment_id: req.params.comment_id },
// 			 function(err, comment){
// 			if(err){
// 				res.status(500).send(err, "Something broke on deleting a comment")
// 			} else {
// 				res.json(comment)
// 			}
// 		});
// 	})

module.exports = router;