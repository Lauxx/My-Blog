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
var Markdown = require('react-markdown');


function BlogCard(props){
	
		return (
		<div>
			<div className="container col-xs-8 col-xs-offset-2">
				<a onClick={ props.getId.bind(null,'showOneBlog', props.id) } className="black">
					<h1 className="divider"> { props.title } </h1>
				</a>
				<p> Posted by <b>{ props.author }</b>, on <b>{ props.date }</b> </p>
				<Markdown source={props.content}/> 				
			</div>
			
		</div>

			)
	};

module.exports = BlogCard;