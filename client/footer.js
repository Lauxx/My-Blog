//BlogApp
//	Navbar
//	Footer
var React = require('react');
var links = ['Home', 'Blog', 'About', 'Contact'];
var Icons = require('./icons');

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
			
				<nav className="navbar footer navbar-inverse navbar-fixed-bottom">
  					<div className="col-lg-offset-5 icons">
  					<Icons />
  					</div>
						{ link }
							
					
					
					<p className="white text-center">© Copyright CodingLotus 2016</p>
				</nav>
			</div>	
			)
	}
});

module.exports = Footer;