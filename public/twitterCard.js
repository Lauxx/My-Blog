//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -SearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard

var TwitterCard = React.createClass({
	render: function(){
		return (
			<div>
				<div className="panel panel-default">
				<div className="panel-body">
					Basic panel example
				</div>
				</div>
			</div>

			)
	}
});