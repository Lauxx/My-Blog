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
var CommentListData = require('./commentListData');

function SingleBlogDetail(props){

	return (
		<div>
			<div className="col-xs-offset-10">
				<a className="btn btn-default btn-sm edit-button pencil">
					<span className="glyphicon glyphicon-pencil pencil" ></span>
				</a>
			</div>	
			<div className="container col-xs-10 col-xs-offset-1">
				<h1 className="divider"> { props.oneBlog.title } </h1>
					<p> Posted by <b>{ props.oneBlog.author }</b>, on <b>{ props.oneBlog.date }</b> </p>
					<p> { props.oneBlog.content } </p>
					<br/><br/>
					<CommentListData commentArray={ props.commentArray }/>		
			</div>			
		</div>
		)
};

module.exports = SingleBlogDetail;