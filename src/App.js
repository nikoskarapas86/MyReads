
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI'
import Inquery from './Inquery';
class App extends Component {
  state = {
    books: []
  }
  getAllBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })});
  }

  componentDidMount() {
    this.getAllBooks()
  }


  updatebook = (book, self) => {
    BooksAPI.update(book, self).then(books => {
     this.getAllBooks()
    });
  }

  render() {

    return (
      <div className="App">
        <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <BookList books={this.state.books} updatebook={this.updatebook} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            </div>)} />
            <Route
          path="/search"
          render={
            () => 
              <Inquery  books={this.state.books} updatebook={this.updatebook}  />
            
          }
        />

        </Switch>
        
        

      </div>
    );
  }

}

export default App;
