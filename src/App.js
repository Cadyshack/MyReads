import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks.js';
import MyReads from './MyReads.js';
import './App.css';

class App extends React.Component {
  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  render() {

    return (
      <div className="app">
      <Route path="/search" render={() => (
        <SearchBooks
          books={this.state.books}
        />
        )}/>
      <Route path="/" exact render={() => (
        <MyReads
          books={this.state.books}
        />
        )} />

      </div>
    )
  }
}

export default App
