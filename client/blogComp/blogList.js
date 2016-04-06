/* BlogApp
	Navbar
	Footer
	Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)

*/


var React = require('react');
var BlogCard = require('./blogCard');

function BlogList(props){

	var blogs = props.blogArray.map(function(item){
		return <BlogCard
				key={ item._id } 
				author={ item.author } 
				title={ item.title } 
				content={ item.content }
				date={ item.date } />
	})
		return (
			<div className="container">
				{ blogs }
			</div>
			)
	};

module.exports = BlogList;