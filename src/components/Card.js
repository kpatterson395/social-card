import React from 'react';


export default class Card extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value: this.props.value,
			index: this.props.index
		}
	}
	deleteCards = () => {
		this.props.deleteCards(this.state.index)
	}

	render(){
		return (
			<li>
				{this.props.value}
				<button onClick={this.deleteCards}>REMOVE</button>
			</li>
		)
	}
}