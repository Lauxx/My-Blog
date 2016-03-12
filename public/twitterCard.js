//-TwitterApp: gets state and passes it down to the children; manage state at highest possible level
//  -SearchBar: cares about the state
//	-TwitterBox: cares about the state
//		-TwitterCard

var TwitterCard = React.createClass({
	render: function(){
		return (
			<div>
				<div className="row">
					<div className="panel panel-default col-md-4">
						<img src={this.props.profile_img} className="img-thumbnail" />
						<img src="http://u.realgeeks.media/windowtocaptivasanibel/twitter_thumbnail.png"/>
						<h4>{ this.props.screen_name }</h4>
						<p>{ this.props.text }</p>
						<h5>{ this.props.created_at }</h5>

					</div>
				</div>
			</div>

			)
	}
});