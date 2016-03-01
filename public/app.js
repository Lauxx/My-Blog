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





var addPost = function(event){
	event.preventDefault();

	var author = $('#author').val();
	var title = $('#title').val();
	var content = $('#content').val();
	var date = $('#date')

	var $row = $('#postRow');

	var post = {};
	post.author = author;
	post.title = title;
	post.content = content;
	post.date = date;

	$.ajax({
		url: 'api/blog/', 
		method: 'POST',
		data: post, 
	}).done(function(data){
		console.log('I made a blog post!', data);

		$row.append('<p id=' + data._id + '>\
			<p>' + data.author + '</p>\
			<p>' + data.title +'</p>\
			<p>' + data.content +'</p>\
			<p>' + data.date +'</p>\
			</p>'
					);
		

	});

	$('#author').val('');//clears input fields
	$('#title').val('');
	$('#content').val('');
	$('#date').val('');

}

$('#addPost').on('click', addPost);


