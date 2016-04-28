var React = require('react');

var Icons = React.createClass({
	render: function(){
		return(
			<div className="">
				<a className="" href="https://twitter.com/coding_lotus"><img src="img/twitter.png" height="60px" width="60px"/></a>
				<a className="" href="https://linkedin.com/in/laurennichols11"><img src="img/linkedin.png" height="60px" width="60px"/></a>
				<a className="" href="https://github.com/lauxx"><img src="img/github.png" height="60px" width="60px"/></a>
			</div>
			)
	}
});

module.exports = Icons;