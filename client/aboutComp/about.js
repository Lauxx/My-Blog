
var React = require('react');

var About = React.createClass({
	render: function(){
		return (
			<div className="about-me">
				<div className="col-lg-12"> 
					<h1 className="col-lg-6 caption divide">About CodingLotus</h1>
				</div>

				<div className="col-lg-7">
					<p>
						Born and raised under the Montana sky, I am so grateful to call myself
						a Montanan. I was born in Billings, Montana - while the lack of 
						culture was less to be desired, I was fortunate enough to have a mother 
						who exposed me to the world & it's mostly unforgiving nature - for this I am forever
						grateful. When I left for college I was most excited to experience a new Montana. Enter Missoula - 
						where the term 'granola' is socially accepted, and where art culture is fostered by the 
						community. I fell in love with the mountains, the people, and my independence. While I had
						always excelled in academics growing up, I struggled settling on a career path during my time at 
						the University of Montana. When the expense of a degree is every rising, I made the decision
						to harbor some serious soul searching.
					</p>
					<p>
						One thing I did know how to do well - work, and work I did. Unfortunately in Montana, the best way
						for young adults to make great money is by selling ourselves to the service industry. And I do mean 
						selling ourselves - in reality you are accepting the following conditions: never having an evening to yourself, 
						forget about ever having a weekend off, or making it to anything holiday related event - for this is the
						best time to make a living. I began at entry level positions and progressed the ladder to management.
						I was able to spend time in a variety of positions including corporately based businesses, privately owned
						businesses, as well as catering to the elite of society. Each opportunity presented to me provided valuable 
						life lessons and experience not found in a textbook.  
					</p>
					<p>
						
					</p>
				</div>
				<div className="col-lg-5">	
					<img className="about-me-photo" src="https://scontent-sea1-1.xx.fbcdn.net/t31.0-8/10658896_10154611196215226_6760521542645550314_o.jpg" width="100%" height="100%" />
					<h4 className="caption divide"> Bowman Lake - Glacier National Park </h4>
					<img className="about-me-photo" src="https://scontent-sea1-1.xx.fbcdn.net/v/t35.0-12/10499768_10154329750630226_462982212_o.jpg?oh=8509b5dc59522d2cc7300a5f2c2c388c&oe=574DD1F2" width="100%" height="100%" /> 
					<h4 className="caption divide"> Avalanche Lake - Glacier National Park </h4>
				</div>	
					
			</div>

			)
	}
});

module.exports = About;