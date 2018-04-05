import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI.js';


class Book extends Component {


	shelfChange = (e) => {
		this.props.onBookUpdate(e.target.value)
	}

	render() {

		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover">
						<img src={this.props.img} alt={this.props.title + " book cover"} />
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

}

export default Book;