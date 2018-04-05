import React, { Component } from 'react';
import Book from './Book.js';

class BookShelf extends Component{

  render(){
    const { myBooks, title, shelf } = this.props;
    
    let bookResult;


    return (

      <div className="bookshelf">
        {title !== 'none' && (
          <h2 className="bookshelf-title">{title}</h2>
        )}

        <div className="bookshelf-books">
          <ol className="books-grid">
            {
            myBooks.filter( (book) => book.shelf === shelf )
                .map( book => (
                  <li key={book.id}>
                    <Book
                      title={book.title}
                      authors={book.authors}
                      shelf={book.shelf}
                      img={book.imageLinks.thumbnail}
                      />
                  </li>
                ))
            }


          </ol>
        </div>
      </div>
    );
  }
}


export default BookShelf;
