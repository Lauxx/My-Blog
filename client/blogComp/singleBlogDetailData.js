/* BlogApp
	Navbar
	Footer
	Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)
	  BlogPostFormData
	  	BlogPostForm
	  SingleBlogDetailData
	  	SingleBlogDetail			

*/

var React = require('react');
var SingleBlogDetail = require('./singleBlogDetail');

var SingleBlogDetailData = React.createClass({

	getInitialState: function(){
		return {
			oneBlog: null,
			comments: []
		}
	},

	loadOneBlogFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/blogPost/' + this.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({ oneBlog: data })
		})
	},

	loadCommentsFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/blogPost/' + this.props.id + '/comment',
			method: 'GET'
		}).done(function(data){
			self.setState({ comments: data })
		})
	},

	componentDidMount: function(){
		this.loadOneBlogFromServer();
		this.loadCommentsFromServer();
	},

	render: function(){
		return this.state.oneBlog ? <SingleBlogDetail oneBlog={ this.state.oneBlog } commentArray={ this.state.comments }/> : null;
	}
});

module.exports = SingleBlogDetailData;