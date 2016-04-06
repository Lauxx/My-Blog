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
var BlogPostForm = require('./blogPostForm');

var BlogPostFormData = React.createClass({
	getInitialState: function(){
		return {
			author: null,
			title: null,
			content: null,
			date: null
		}
	},

	handleNewBlogPost: function(blog){
		$.ajax({
			url: '/api/blogPost',
			type: 'POST',
			data: blog
		}).done(function(data){
			console.log(data)
		})
	},

	handleAuthorChange: function(e){
		this.setState({ author: e.target.value })
	},

	handleTitleChange: function(e){
		this.setState({ title: e.target.value })
	},

	handleContentChange: function(e){
		this.setState({ content: e.target.value })
	},

	handleDateChange: function(e){
		this.setState({ date: e.target.value })
	},

	handleBlogSubmit: function(e){
		e.preventDefault();

		var blog = {};
		blog.author = this.state.author.trim();
		blog.title = this.state.title.trim();
		blog.content = this.state.content.trim();
		blog.date = this.state.date.trim();

		console.log(blog);

		this.handleNewBlogPost(blog);
		this.setState({ author: '', title: '', content: '', date: ''})

	},

	render: function(){
		return (
			<div>
				<BlogPostForm handleBlogSubmit={ this.handleBlogSubmit }
				handleAuthorChange={ this.handleAuthorChange }
				handleTitleChange={ this.handleTitleChange }
				handleContentChange={ this.handleContentChange }
				handleDateChange={ this.handleDateChange } />
			</div>
			)
	}
});

module.exports = BlogPostFormData;