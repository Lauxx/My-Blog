//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -SearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard

var TwitterBox = React.createClass({
	render: function(){
		return (
			<div>
			<h4> Twitter Box </h4>
			<TwitterCard/>
			</div>
			)
	}
});