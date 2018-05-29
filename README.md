----------
This is a cakes react  redux listing example....

npm run start 

<image src=image.png />
----------


import React, { Component } from 'react';
import {connect} from 'react-redux'

class MovieDetail extends Component {
 	constructor(props) {
    		super(props);
	
		this.handleChange= this.handleChange.bind(this);

    		this.state = {
		comment: "",
		yumfactor:0
		}
	}

	handleChange(){

		var url = "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/";

		var data = {};
		data.id = this.props.movie.id;
		data.name  = this.props.movie.name;
		data.comment  = this.props.movie.comment;
		data.imageUrl  = this.props.movie.imageUrl;
		data.yumFactor  = this.state.yumfactor;

		var json = JSON.stringify(data);

		var xhr = new XMLHttpRequest();
		xhr.open("PUT", url+ this.props.movie.id, true);
		xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
		xhr.send(json);

	}

	render() {
		console.log(this.state.comment);
		console.log(this.state.yumfactor);
		if (!this.props.movie) {
			return (
				<div>Click one of the cakes to see details.</div>
			);
		}
		return (
		<div>
			<div>
 				<h4>Name: {this.props.movie.name}</h4>
				<div>Comment: {this.props.movie.comment}</div>
				<div>yumFactor: {this.props.movie.yumFactor}</div>
			</div>

		<form onSubmit={this.handleChange}>
		<div>
		<label>Comment:</label>
		<input type="text" value={this.state.comment}  onChange={(e)=>this.setState({comment:e.target.value})} /> 
</div>

		<div>
		<label>Yum Factor</label>
		<input type="text" value={this.state.yumfactor} onChange={(e)=>this.setState({yumfactor:e.target.value})} /> 
		</div>
		<div><button>Modify</button></div>
		</form>

		</div>	
		);
	}
}

function mapStateToProps(state) {
  return {
    movie: state.activeMovie
  };
}

export default connect(mapStateToProps)(MovieDetail)
