var React = require('react');


var BlogPostToggle = React.createClass({
	render: function(){
		return (
			<div className="container col-xs-1 col-xs-offset-10">
				<div className="btn-group" data-toggle="buttons">
					<a className="btn btn-default" 
					onClick={ this.props.toggleActiveComp.bind(null, 'blogPostForm') }>
					Post a Blog</a>
					<a className="btn btn-default" 
					onClick={ this.props.toggleActiveComp.bind(null, 'blogList') }>
					Blog List</a>
				</div>
			</div>
			)
	}

});

module.exports = BlogPostToggle;