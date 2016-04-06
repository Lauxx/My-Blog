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

function SingleBlogDetail(props){
	return (
		<div>
			<div className="col-xs-offset-10">
				<a className="btn btn-default btn-lg edit-button pencil">
					<span className="glyphicon glyphicon-pencil pencil" ></span>
				</a>
			</div>	
			<div className="container col-xs-10 col-xs-offset-1">
				<h1 className="divider"> { props.oneBlog.title } </h1>
					<p> Posted by { props.oneBlog.author }, on { props.oneBlog.date } </p>
					<p> { props.oneBlog.content } </p>
						<br/><br/>
			</div>			
		</div>
		)
};

module.exports = SingleBlogDetail;