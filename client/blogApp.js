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
var ReactDOM = require('react-dom');
var Navbar = require('./navbar');
var Footer = require('./footer');
var Home = require ('./homeComp/home');
var Blog = require('./blogComp/blog');
var About = require('./aboutComp/about');
var Contact = require('./contactComp/contact');
var Icons = require('./icons');

require('./stylesheets/main.scss');

var BlogApp = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'Home'
		}
	},

	setActiveComponent: function(componentName){
		this.setState({
			activeComponent: componentName
		})
	},

	showWhichComponent: function(){
		switch(this.state.activeComponent){
			case 'Home':
				return <Home/>
				break;
			case 'Blog':
				return <Blog/>
				break;
			case 'About':
				return <About/>
				break;
			case 'Contact':
				return <Contact/>
				break;
			default: 
				return <Home/>
		}
	},

	render: function(){
		return(
			<div>
			<Navbar setActiveComponent = { this.setActiveComponent }/>
				<br/>
				{ this.showWhichComponent() }
			
			<Footer setActiveComponent = { this.setActiveComponent }/>
			</div>
			)
	}
});


ReactDOM.render(
  <BlogApp />, document.getElementById('blogApp')
);