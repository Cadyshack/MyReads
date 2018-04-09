import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';


class MyReads extends Component {


  render(){

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							title='Currently Reading'
							myBooks={this.props.myBooks}
							shelf='currentlyReading'
              onBookUpdate={this.props.onBookUpdate}

						/>
						<BookShelf
							myBooks={this.props.myBooks}
							title='Want to Read'
							shelf='wantToRead'
              onBookUpdate={this.props.onBookUpdate}
						/>
						<BookShelf
							myBooks={this.props.myBooks}
							title='Read'
							shelf='read'
              onBookUpdate={this.props.onBookUpdate}
						/>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search" >Add a book</Link>
				</div>
			</div>

		);
	}
}

export default MyReads;