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

function BlogCard(props){
		return (
			<div className="container col-xs-10 col-xs-offset-1">
				<h1 className="divider"> { props.title } </h1>
				<p> Posted by { props.author }, on { props.date } </p>
				<p> { props.content } </p>
				<a className="btn btn-default btn-lg edit-button pencil">
				<span className="glyphicon glyphicon-pencil pencil" ></span>
				</a>
			</div>
			)
	};

module.exports = BlogCard;