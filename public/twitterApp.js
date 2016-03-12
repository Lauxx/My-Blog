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
	onKeywordSubmit: function(newKeyword){//just a function that exists- not a prop or a state- as is
		this.setState({keyword: newKeyword});
		this.loadTweetsFromServer(newKeyword);
	},
	loadTweetsFromServer: function(keyword){
		var self = this;
		$.ajax({
			url: this.props.url + keyword,
			method: 'GET',
		}).done(function(data){
			self.setState({tweets: data})
		})

	},
	componentDidMount: function(){
		this.loadTweetsFromServer(this.state.keyword);
	},
	render: function () {
	return (
		<div>
		<p> Searching Twitter for: {this.state.keyword}</p>
			<TwitterSearchBar onKeywordSubmit={this.onKeywordSubmit}/>
			<TwitterBox tweetsArray={this.state.tweets}/>
		</div>
		)
	}
});

React.render(<TwitterApp url = "/api/tweets/"/>,
	document.getElementById ('twitterapp'));

