var React = require('react');


var BlogPostToggle = React.createClass({
	render: function(){
		return (
		<div>	
			<section className="container col-xs-11 display">
					<a className="black" 
					onClick={ this.props.toggleActiveComp.bind(null, 'blogList') }>
					<h3>Blog List</h3></a>
			</section>
				
		</div>	
			)
	}

});

module.exports = BlogPostToggle;