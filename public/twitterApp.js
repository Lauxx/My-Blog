
var TwitterApp = React.createClass({
	render: function () {
	return (
		<div>
			<TwitterSearchBar/>
			<TwitterBox/>
		</div>
		)
	}
});

React.render(<TwitterApp/>,
	document.getElementById ('twitterapp'));