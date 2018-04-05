import React, { Component } from 'react';


class Book extends Component {

	render() {

		return(
			<div className="book">
        <div className="book-top">
          <div className="book-cover">
          	<img src={this.props.img} alt={this.props.title + " book cover"} />
          </div>
          <div className="book-shelf-changer">
            <select value={this.props.shelf}>
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