//BlogApp
//	Navbar
//	Footer

var React = require('react');
var links = ['Home', 'Blog', 'About', 'Contact'];

var Navbar = React.createClass({
	render: function(){

		var self = this;
		var link = links.map(function(item){
			return (
				<a className="font" 
				onClick={ self.props.setActiveComponent.bind(null, item) }>{ item }</a>
				)
		})


		return (
			<div>
				<div className="container nav">
  					
  						
    					 { link } 
    					
  					
				</div>
			</div>

			)
	}
});

module.exports = Navbar;