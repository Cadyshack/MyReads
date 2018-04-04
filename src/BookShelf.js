import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js';

class BookShelf extends Component{

  render(){
    const { books, title, shelf } = this.props;


    return (

      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter( (book) => book.shelf === shelf )
            .map( (book) => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  img={book.imageLinks.thumbnail}
                  />
              </li>
            ))}

          </ol>
        </div>
      </div>
    );
  }
}


export default BookShelf;
