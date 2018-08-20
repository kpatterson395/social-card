import React from 'react';

export default class InputForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	addItem = (e) => {
		e.preventDefault();
		const post = e.target.elements.currentPost.value.trim();
		this.props.addMoreCards(post);
		e.target.elements.currentPost.value = ""
	
	}
	render(){
		return (
			<form onSubmit={this.addItem}>
				<textarea className="postText" name="currentPost" placeholder="tell us your thoughts...."></textarea>
				<input className="postSubmit" type="submit"/>
			</form>

		)
	}
}