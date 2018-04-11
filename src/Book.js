import React from 'react';
import defaultImage from './imgs/default.png';

/*class Book extends Component {

	shelfChange = (e) => {
		this.props.onBookUpdate(e.target.value)
	}

	render() {
		const image = this.props.img ? this.props.img : defaultImage

		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover">

						<img src={image} alt={this.props.title + " book cover"} />
					</div>
					<div className="book-shelf-changer">
						<select value={this.props.shelf} onChange={this.shelfChange} >
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{this.props.title}</div>
				<div className="book-authors">{this.props.authors}</div>
			</div>
		);
	}
}*/

function Book(props){

	const shelfChange = (e) => {
		props.onBookUpdate(e.target.value)
	}
	const image = props.img ? props.img : defaultImage
	return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover">

						<img src={image} alt={props.title + " book cover"} />
					</div>
					<div className="book-shelf-changer">
						<select value={props.shelf} onChange={shelfChange} >
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{props.title}</div>
				<div className="book-authors">{props.authors}</div>
			</div>
		);
}

export default Book;