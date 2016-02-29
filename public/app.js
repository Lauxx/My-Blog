console.log('Lotus - hi!');

// var BlogPost = React.createClass({
// 	render: function(){
// 		var self = this;
// 		var blogPost = this.props.posts.map(function(post){
// 			return (
// 				<ul>
// 				<p>{post.author}</p>
// 				<p>{post.title}</p>
// 				<p>{post.content}</p>
// 				</ul>
// 				)
// 		})
// 	}
// });

// var App = React.createClass({
// 	getInitialState: function(){
// 		return{
// 			posts: []
// 		},
// 	}
// });

// React.render(<App/>, document.getElementById('jollyRancher'));

var addPost = function(){
	event.preventDefault();

	var author = $('#author').val();
	var title = $('#title').val();
	var content = $('#content').val();


}


$('#addPost').on('click', addPost);


