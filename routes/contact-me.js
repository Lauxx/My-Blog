var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.route('/contact')
	.post(function(req, res){

		var contact = new Contact();
		contact.name = req.body.name;
		contact.email = req.body.email;
		contact.content = req.body.content;

		contact.save(function(err, contact){
			if(err){
				console.log(err)
			} else {
				res.json(contact)
			}
		});
	})
	.get(function(req,res){
		Contact.find(function(err, contact){
			if(err){
				console.log(err)
			} else {
				res.json(contact)
			}
		})
	});

router.route('/contact/:contact_id')
	.get(function(req, res){
		Contact.findById(req.params.contact_id, function(err,contact){
			if(err){
				console.log(err)
			} else {
				res.json(contact)
			}
		})
	})
	.put(function(req, res){
		Contact.findById(req.params.contact_id, function(err, contact){
			if(err){
				console.log(err)
			} else{
				contact.name = req.body.name ? req.body.name : contact.name;
				contact.email = req.body.email ? req.body.email : contact.email;
				contact.content = req.body.content ? req.body.content : contact.content;

				contact.save(function(err){
					if(err){
						console.log(err)
					} else {
						res.json({message: "Contact updated!"})
					}
				})
			}
		})
	})
	.delete(function(req, res){
		Contact.remove({_id: req.params.contact_id}, function(err, contact){
			if(err){
				console.log(err)
			} else {
				res.json({message: "Contact deleted!"})
			}
		})
	})


module.exports = router;



