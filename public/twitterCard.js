//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -SearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard

var TwitterCard = React.createClass({
	render: function(){
		return (
			<div>
				<div className="panel panel-default col-md-4">
				<div className="panel-body">
					Hello Lotus
				</div>
				</div>
			</div>

			)
	}
});