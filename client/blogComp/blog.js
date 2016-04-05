/* BlogApp
	Navbar
	Footer
	blogComp/Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)

*/


var React = require('react');

var Blog = React.createClass({
	render: function(){
		return (
			<div className="jumbotron container">
				<h1>Best Blog</h1>
			</div>
			)
	}
});

module.exports = Blog;