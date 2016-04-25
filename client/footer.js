//BlogApp
//	Navbar
//	Footer
var React = require('react');
var links = ['Home', 'Blog', 'About', 'Contact'];


var Footer = React.createClass({
	render: function(){
		var self = this;
		var link = links.map(function(item){
			return (
				<a className ="white nav-item nav-link foot-flex" 
				onClick={ self.props.setActiveComponent.bind(null, item) } > 
					{ item }
				</a>
			)
		})



		return (
			<div >
				<nav className="navbar-inverse footer">
  					<div className="container col-xs-12">
  					<br/><br/>
						{ link }
							
					</div>
					
					<p className="white text-center">© Copyright CodingLotus 2016</p>
				</nav>
			</div>	
			)
	}
});

module.exports = Footer;