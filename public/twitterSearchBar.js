//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -SearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard


var TwitterSearchBar = React.createClass({
	render: function(){
		return (
			<div>
			<input type="text" placeholder="search" />
			<button> hit it </button>
			</div>
			)
	}
});
