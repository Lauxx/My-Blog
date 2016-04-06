/* BlogApp
	Navbar
	Footer
	Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)

*/

var React = require('react');

function BlogCard(props){
		return (
			<div className="container col-xs-10 col-xs-offset-1">
				<h1 className="divider"> { props.title } </h1>
				<p> Posted by { props.author }, on { props.date } </p>
				<p> { props.content } </p>

			</div>
			)
	};

module.exports = BlogCard;