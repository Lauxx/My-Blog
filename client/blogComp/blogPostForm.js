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

var BlogPostForm = React.createClass({
	render: function(){
		return(
			<div>
				<div className="container">
			<form className="col-sm-6" onSubmit={ this.props.handleBlogSubmit }>
			<legend>Post a Blog</legend>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput">Title</label>
    				<input type="text" className="form-control" onChange={ this.props.handleTitleChange } 
    				value={ this.props.title }
    				id="formGroupExampleInput" placeholder="Blog Title"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Author</label>
    				<input type="text" className="form-control" onChange={ this.props.handleAuthorChange }
    				value={ this.props.author }
    				id="formGroupExampleInput2" placeholder="Author"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Date</label>
    				<input type="text" className="form-control" onChange={ this.props.handleDateChange }
    				value={ this.props.date }
    				id="formGroupExampleInput2" placeholder="Date"/>
  				</fieldset>	
  				 <fieldset className="form-group">
    				<label for="formGroupExampleInput2">Content</label>
    				<input type="text" className="form-control" onChange={ this.props.handleContentChange }
    				value={ this.props.content }
    				id="formGroupExampleInput2" placeholder="content"/>
  				</fieldset>
  				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
			</div>
			</div>
			)
	}
});

module.exports = BlogPostForm;