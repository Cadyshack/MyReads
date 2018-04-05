import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';


class SearchBooks extends Component{
  state = {
    query: '',
    result: []
  }
  updateQuery = (search) => {
    BooksAPI.search(search)
    .then( res => {
      if ( search === '') {
        this.setState({query: search, result: []})
      } else if (res.error) {
        this.setState({query: search, result: []})
      } else {
        console.log(res);
        this.setState({query: search, result: res})
      }
    })
  }

  mapSearchResult = (resultBooks) => {
    return resultBooks.map((resultBook) => {
        const myBook = this.state.books.find(book => book.id === resultBook.id);
        return {
            id: resultBook.id,
            title: resultBook.title,
            authors: resultBook.authors,
            shelf: myBook ? myBook.shelf : 'none',
            imageLinks: resultBook.imageLinks ? resultBook.imageLinks : undefined
        };
    });
};



  render(){
    const { query, result } = this.state;
    let savedBooks = this.props.books;


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          { result.length > 0 ? (
          <ol className="books-grid">
            {result.map( book => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  img={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : undefined}
                  />
              </li>
            ))}
          </ol>

          ) : (
            <div>No results to show</div>
          )
        }

        </div>
      </div>

    )
  }
}

export default SearchBooks;

