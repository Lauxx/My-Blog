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
	  		CommentListData
			

*/

var React = require('react');

var CommentListData = React.createClass({
	render: function(){
		var number = function (){
		var commentCounter = 0;
		for(var i = 0; i < this.props.commentArray.length; i++){
			return commentCounter[i]++;
			console.log(commentCounter);
		}
	};
		

		var comments = this.props.commentArray.map(function(comm){
			var user = comm.user ? comm.user.local : 'no user';
		return (
				<div className="col-xs-7 col-xs-offset-1 comments-border">
					<h1 className="divider">@{ user.username } </h1>
					<p>{ comm.body }</p>
					<p className="comments"> Comment Recieved on <b>{ comm.date.substr(0,10) }</b> from <b>{ user.username }</b></p>
				</div>
			)
	})
		return (
			<div>
				<div>
				</div>
			{ comments }
			</div>
			)
	}
});

module.exports = CommentListData;