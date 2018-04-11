import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';
import { debounce } from 'throttle-debounce';


class SearchBooks extends Component{
  state = {
    query: '',
    result: []
  }

  updateQuery = search => {
    this.setState({query: search}, () => {
      this.debounceUpdateSearch(this.state.query)
    });
  }

  updateSearch = (search) => {
    BooksAPI.search(search)
    .then( res => {
      if ( search === '') {
        this.setState({query: search, result: []})
      } else if (res.error) {
        this.setState({query: search, result: []})
      } else {
        this.setState({query: search, result: res})
      }
    })
  }

  debounceUpdateSearch = debounce(500, this.updateSearch);


  /* mapSearchResult function is based on
   Slack comment  https://udacity-react.slack.com/files/U9826LWAG/F9Q49PZE3/my_mapsearchresult_func.js
   from user dani (U9826LWAG) */

  mapSearchResult = (result) => {
    return result.map((book) => {
      const myBook = this.props.myBooks.find( myBook => myBook.id === book.id);
      return {
          id: book.id,
          title: book.title,
          authors: book.authors ? book.authors : 'Unknown',
          shelf: myBook ? myBook.shelf : 'none',
          imageLinks: book.imageLinks ? book.imageLinks.thumbnail : undefined
      };
    });
  };

  render(){
    const { result } = this.state;
    let bookSearch = this.mapSearchResult(result);

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
          { bookSearch.length > 0 ? (
          <ol className="books-grid">
            {bookSearch.map( book => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  img={book.imageLinks}
                  onBookUpdate={(shelf) => this.props.onBookUpdate(book, shelf)}
                  />
              </li>
            ))}
          </ol>
          ) : (
            this.state.query === '' ? (<div></div>) : (<div>No books found</div>)
          )
        }
        </div>
      </div>

    )
  }
}

export default SearchBooks;

