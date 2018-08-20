import React from 'react';
import Card from './Card';

export default class CardItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

	deleteCards = (index) => {
		this.props.deleteCards(index)
	}
	render(){
		return (
			<div className="postWrapper">
				<div className="posts">
					{this.props.items.map((val, i) => {		
								return <Card deleteCards={this.deleteCards} key={val} value={val} index={i} />
						})
				}
				</div>
			</div>
		)
	}
}


			