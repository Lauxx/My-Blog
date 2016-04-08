var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');

router.route('/user')
	.get(function(req, res) {

   	if(req.user) {
     console.log(req.user)
     mongoose.model('User').findById({
         _id: req.user._id
       },
       function(err, user) {
         if (err) {
           return console.log(err);
         } else {
           res.json(user)
         }
       });
   } else {
     res.json({
       user: "anonymous"
     })
   }
})

module.exports = router;