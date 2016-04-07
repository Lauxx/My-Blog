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
	  SingleBlogDetailData
	  	SingleBlogDetail
	  		CommentList
			CommentPostData
				CommentPostForm

*/

var React = require('react');
var CommentList = require('./commentList');
var CommentPostData = require('./commentPostData');
var Markdown = require('react-markdown');

function SingleBlogDetail(props){

	return (
		<div>
			<div className="col-xs-offset-10">
				<a className="btn btn-default btn-sm edit-button pencil" 
				onClick={ props.getId.bind(null,'editOneBlog', props.id) }>
					<span className="glyphicon glyphicon-pencil pencil"></span>
				</a>
			</div>	
			<div className="container col-xs-10 col-xs-offset-1">
				<h1 className="divider"> { props.oneBlog.title } </h1>
					<p> Posted by <b>{ props.oneBlog.author }</b>, on <b>{ props.oneBlog.date }</b> </p>
					 <Markdown source={ props.oneBlog.content } /> 
					<br/><br/>
					<CommentList commentArray={ props.commentArray }/>
					<br/><br/>
			</div>
					<CommentPostData id={ props.id } 
					loadOneBlogFromServer={ props.loadOneBlogFromServer }
					loadCommentsFromServer={ props.loadCommentsFromServer }/>
							
		</div>
		)
};

module.exports = SingleBlogDetail;