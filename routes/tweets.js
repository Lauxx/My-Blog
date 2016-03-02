//our api that talks to twitter; our node server code
var express = require('express');
var router = express.Router();
var Twit = require('twit');

var T = new Twit({
	consumer_key: 'Eju1LDsVPmI7sJmM83PjOxmRZ',
	consumer_secret:   'KudUQwljUgXq9EJw3jT54mnham7Os96EZ9OYmTJLGhh96x9iF8',
  	access_token:         '704770207609303040-scVvrXJueX4DAoPm4Vq6chsTi8C64ML',
  	access_token_secret:  'c4dwaU2WkKZMD3YeWZ7y4OR7CiMTZSb4S5YZWGJto8sgs',
  	timeout_ms:           60*1000,
})

router.route('/:keyword')
	.get(function(req, res){
		var keyword = req.params.keyword;
		T.get('search/tweets', { q: keyword + ' since:2011-07-11', count: 100 }, function(err, data, response) {
  		var myTweetArr = data.statuses.map(function(tweet){
  			return {
  				text: tweet.text, 
  				screen_name: tweet.user.screen_name, 
  				created_at: tweet.created_at, 
  				profile_image_url: tweet.user.profile_image_url,
  				 }
  		});
  			res.json(myTweetArr)
		})
	}); 


module.exports = router;