//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -TwitterSearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard

var TwitterApp = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired
	},

	getInitialState: function(){
		return{
			tweets: [],
			keyword: 'drumpf'
		} 
	},
	loadTweetsFromServer: function(){
		var self = this;
		$.ajax({
			url: this.props.url + this.state.keyword,
			method: 'GET',
		}).done(function(data){
			self.setState({tweets: data})
		})

	},
	componentDidMount: function(){
		this.loadTweetsFromServer();
	},
	render: function () {
	return (
		<div>
			<TwitterSearchBar/>
			<TwitterBox tweetsArray={this.state.tweets}/>
		</div>
		)
	}
});

React.render(<TwitterApp url = "/api/tweets/"/>,
	document.getElementById ('twitterapp'));