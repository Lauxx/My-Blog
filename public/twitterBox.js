//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -SearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard

var TwitterBox = React.createClass({
	propTypes:{
		tweetsArray: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	},//if array is not being passed correctly - tell me about it - safety net
	render: function(){
		var tweets = this.props.tweetsArray.map(function(tweet){
			return <TwitterCard screen_name={tweet.screen_name} 
			text={tweet.text} created_at={tweet.created_at}
			profile_impg={tweet.profile_img}/>
		});
		return (
			<div>
			<h4> Twitter Box </h4>
			{ tweets }
			</div>
			)
	}
});