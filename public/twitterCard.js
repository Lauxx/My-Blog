var TwitterCard = React.createClass({
	getInitialState: function() {
		return {
			tweets: []
		}
	},
	loadTweetsFromServer: function(){
		var self = this;
		$.ajax({
			url: this.props.url,
			method: 'GET',
		}).done(function(data){
			self.setState({tweets:data})
		})
	},
	componentDidMount: function(){
		this.loadTweetsFromServer();
	},
	render: function(){
		console.log(this.state.tweets);
		var twitterCard = this.state.tweets.map(function(tweet){


		return (
			<div className = "row">
				<div className = "panel panel-default col-md-4">
					<div className = "panel-body">
						<img src="http://u.realgeeks.media/windowtocaptivasanibel/twitter_thumbnail.png"/>
						<h5 className="tweet-para">{tweet.screen_name}</h5>
						<p className="tweet-para">{tweet.text}</p>
						<h6 className="tweet-para">{tweet.created_at}</h6>
					</div>
				</div>
			</div>

			)
	});
		return (
			<div>
			{twitterCard}
			</div>
			)
	}
});

React.render(<TwitterCard url = '/api/tweets/montana' />, document.getElementById('twitter-card'));

