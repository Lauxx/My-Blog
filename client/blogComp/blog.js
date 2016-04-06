/* BlogApp
	Navbar
	Footer
	Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)
	  BlogPostFormData
	  	BlogPostForm		

*/


var React = require('react');
var BlogListData = require('./blogListData');
var BlogPostFormData = require('./blogPostFormData');


var Blog = React.createClass({
	

	render: function(){
		return (
		<div>	
			<div className="jumbotron container">
				<h1>blog</h1>
			</div>
			<div className="container">
			<BlogListData />
			<BlogPostFormData />
			<br/>
			</div>
		</div>	
			)
	}
});

module.exports = Blog;