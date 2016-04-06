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
	  		CommentListData
	  			CommentList
	  				CommentCard			

*/

var React = require('react');

var CommentListData = React.createClass({
	render: function(){
		return (
			<div>
			Comment List Data here!
			</div>
			)
	}
});

module.exports = CommentListData;