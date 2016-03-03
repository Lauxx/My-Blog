// var TwitterCard = React.createClass({
// 	getInitialState: function() {//only happens once - the first time the page is opened - being born
// 		return {
// 			tweets: []
// 		}
// 	},
// 	loadTweetsFromServer: function(){//client side needs to go talk to api to get data
// 		var self = this;
// 		$.ajax({
// 			url: this.props.url,//being passed in at the bottom
// 			method: 'GET',
// 		}).done(function(data){
// 			self.setState({tweets:data})//specific react method; got get data
// 		})
// 	},
// 	componentDidMount: function(){
// 		this.loadTweetsFromServer();
// 	},
// 	render: function(){
// 		//console.log(this.state.tweets); browser side - returns objects
// 		var twitterCard = this.state.tweets.map(function(tweet){
// 		//storing our .map() in twitterCard to render later & then display the data

// 		return (
// 			<div className = "row">
// 				<div className = "panel panel-default col-md-4">
// 					<div className = "panel-body">
// 						<img src="http://u.realgeeks.media/windowtocaptivasanibel/twitter_thumbnail.png"/>
// 						<h5 className="tweet-para">{tweet.screen_name}</h5>
// 						<p className="tweet-para">{tweet.text}</p>
// 						<h6 className="tweet-para">{tweet.created_at}</h6>
// 					</div>
// 				</div>
// 			</div>

// 			)
// 	});
// 		return (
// 			<div>
// 			{twitterCard}
// 			</div>
// 			)
// 	}
// });

// React.render(<TwitterCard url = '/api/tweets/rainbow' />, document.getElementById('twitter-card'));

