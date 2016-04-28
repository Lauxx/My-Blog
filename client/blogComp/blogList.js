/* BlogApp
	Navbar
	Footer
	Blog
	  BlogPostToggle		
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)
	  BlogPostFormData
	  	BlogPostForm
	  EditBlogData
	  	EditBlogForm	
	  SingleBlogDetailData
	  	SingleBlogDetail
	  		CommentList
			CommentPostData
				CommentPostForm

*/


var React = require('react');
var BlogCard = require('./blogCard');

function BlogList(props){
	var user = props.user && props.user.local ? props.user.local.role : null;

	if( user === 'admin'){
		var postBlog = <a className="black" 
			onClick={ props.toggleActiveComp.bind(null, 'blogPostForm') }>
			<h3>Post a Blog</h3></a>
	} else {
		var postBlog = null;
	}

	var blogs = props.blogArray.map(function(item){

		return <BlogCard
				getId={ props.getId }
				id={ item._id }
				key={ item._id } 
				author={ item.author } 
				title={ item.title } 
				content={ item.content }
				date={ item.date } />
	})
		return (
			<div className="container">
				{ postBlog }
				{ blogs }
			</div>
			)
	};

module.exports = BlogList;