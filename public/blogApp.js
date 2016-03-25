/*-Blog App
	 -BlogPosts
	 	-PastBlogPosts
		-BlogForm
*/

var BlogApp = React.createClass({
	getInitialState: function(){
		blogPost: []
	},

	loadPostsFromServer: function(){
		var self = this;
		$.ajax({
			url: this.props.url,
			method: 'GET'
		}).done(function(posts){
			console.log(posts);
			self.setState({
				blogPost: posts
			})
		})
	},

	componentDidMount: function(){
		this.loadPostsFromServer();
	}

	render: function(){
		return(
			<div>
			<BlogPosts blogArray={this.state.blogPost}/>
			</div>

			)
	}
});

React.render(<BlogApp url='/api/blog/' />, 
	document.getElementById('blogApp'));

