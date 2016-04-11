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
					<div className="links">
						<a className="" href="https://twitter.com/coding_lotus"><img src="img/twitter.png" height="8%" width="8%"/></a>
						<a className="" href="https://linkedin.com/in/laurennichols11"><img src="img/linkedin.png" height="8%" width="8%"/></a>
						<a className="" href="https://github.com/lauxx"><img src="img/github.png" height="8%" width="8%"/></a>
						
					</div>	
					<p className="white text-center">© Copyright CodingLotus 2016</p>
				</nav>
			</div>	
			)
	}
});

module.exports = Footer;