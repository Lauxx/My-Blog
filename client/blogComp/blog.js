/* BlogApp
	Navbar
	Footer
	Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)
	  BlogPostFormData
	  	BlogPostForm
	  EditBlogData
	  	EditBlogForm			

*/


var React = require('react');
var BlogListData = require('./blogListData');
var BlogPostFormData = require('./blogPostFormData');
var BlogPostToggle = require('./blogPostToggle');


var Blog = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'blogList'
		}
	},

	showComponent: function(){
		if(this.state.activeComponent === 'blogList'){
			return <BlogListData />
		} else if(this.state.activeComponent === 'blogPostForm'){
			return <BlogPostFormData toggleActiveComp={ this.toggleActiveComp }/>
		} else {
			throw new Error('No active Component', this.state.activeComponent);
		}
	},

	toggleActiveComp: function(name){
		this.setState({activeComponent: name})
	},

	render: function(){
		return (
		<div>

			<div className="jumbotron container">
				<h1>blog</h1>
			</div>
			<div className="container">
			<BlogPostToggle toggleActiveComp={ this.toggleActiveComp } />
			{ this.showComponent() }
			<br/>
			</div>
		</div>	
			)
	}
});

module.exports = Blog;