//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -SearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard


var TwitterSearchBar = React.createClass({
	getInitialState: function(){
		return {newKeyword: ''}
	},
	handleKeywordChange: function(e){
		this.setState({
			newKeyword: e.target.value
		})
	},
	handleFormSubmit: function(e){
		e.preventDefault();

		var newKeyword = this.state.newKeyword.trim();

		this.props.onKeywordSubmit(newKeyword);//function we have defined in parent component - sets new state
	},
	render: function(){
		return (
			<div>
				<form onSubmit = {this.handleFormSubmit}>
					<input onChange={this.handleKeywordChange} 
					value={this.state.keyword} type="text" placeholder="search" />
					<button> hit it </button>
				</form>	
			</div>
			)
	}
});
