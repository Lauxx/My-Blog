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
var BlogList = require('./blogList');

var BlogListData = React.createClass({
	getInitialState: function(){
		return {
			blogArray: []
		}
	},

	loadBlogsFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/blogPost',
			method: 'GET'
		}).done(function(data){
			self.setState({ blogArray: data })
		})
	},

	componentDidMount: function(){
		this.loadBlogsFromServer();
	},
	render: function(){
		return this.state.blogArray ? <BlogList blogArray={ this.state.blogArray } /> : null;
	}
});

module.exports = BlogListData;