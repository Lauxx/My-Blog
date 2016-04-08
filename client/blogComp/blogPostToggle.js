var React = require('react');


var BlogPostToggle = React.createClass({
	render: function(){
		return (
		<div>	
			<section className="container col-xs-11 display">
					<a className="black" 
					onClick={ this.props.toggleActiveComp.bind(null, 'blogList') }>
					<h2>Blog List</h2></a>
		
					<a className="black" 
					onClick={ this.props.toggleActiveComp.bind(null, 'blogPostForm') }>
					<h2>Post a Blog</h2></a>
		
			</section>
				
		</div>	
			)
	}

});

module.exports = BlogPostToggle;