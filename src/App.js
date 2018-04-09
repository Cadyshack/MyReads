import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks.js';
import MyReads from './MyReads.js';
import './App.css';

class App extends React.Component {
  state = {
    myBooks : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ myBooks: books })
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ myBooks: books })
    })
  }

  render() {

    return (
      <div className="app">
      <Route path="/search" render={() => (
        <SearchBooks
          myBooks={this.state.myBooks}
          onBookUpdate={ this.updateBook }
        />
        )}/>
      <Route path="/" exact render={() => (
        <MyReads
          myBooks={this.state.myBooks}
          onBookUpdate={ this.updateBook }

        />
        )} />

      </div>
    )
  }
}

export default App;
