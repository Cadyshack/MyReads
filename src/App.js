import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks.js';
import BookShelf from './BookShelf.js';
import MyReads from './MyReads.js';
import './App.css';

class App extends React.Component {
  state = {
    books : [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <MyReads
            books={this.state.books}
          />
        )}
      </div>
    )
  }
}

export default App
