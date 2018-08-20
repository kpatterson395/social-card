import React from 'react';
import InputForm from './InputForm';
import CardItem from './CardItem';

export default class SocialCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		}
	}
	addMoreCards = (newCardData) => {
		let cardData = this.state.cards;
		cardData.push(newCardData);
        this.setState({ cards: cardData });
    }
    deleteCards = (index) => {
    	let cardData = this.state.cards;
    	cardData.splice(index, 1);
    	this.setState({ cards: cardData })
    }
	render (){
		return (
			<div>
				<h1>Social Card App</h1>
				<InputForm addMoreCards={this.addMoreCards}/>
				<CardItem deleteCards={this.deleteCards} items={this.state.cards}/>
			</div>
		)
	}
}

