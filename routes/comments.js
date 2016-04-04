

router.route('/:_id/comments')
	.get(function(req, res, next){
		Comments.find(function(err, comments){
			if(err){
				res.status(500).send(err, "Something broke on getting all comments");
				next();
			} else {
				res.json(comments)
			}
		});
	})

	.post(function(req, res, next){
		var comment = new Comments();

		comment.body = req.body.body;
		comment.date = req.body.date;
		comment.blog = req.params._id;
		comment.user = req.user._id; 

		comment.save(function(err, comment){
			if(err){
				res.status(500).send(err, "Something broke on saving a comment");
				next();
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
