import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from './BooksAPI'



class Inquery extends Component {

    state = {
        findedBooks: [], attemp: false

    }

    addProperty = (book, books) => {
        return book.shelf = books.find(b => b.id === book.id) ? books.find(b => b.id === book.id).shelf : 'none'
    }

    findBooks = (event) => {
        if (event.target.value.trim().length > 0) {
            BooksAPI.search(event.target.value.trim(), 30).then(findedBooks => {
                if (findedBooks && findedBooks.length) {

                    findedBooks.map(book => this.addProperty(book, this.props.books))
                    this.setState({ findedBooks })
                } else {
                    this.setState({ findedBooks: [], attemp: true })
                }
            })
        } else this.setState({ findedBooks: [], attemp: false });
    }

    update = (book, shelf) => {
        this.props.updatebook(book, shelf)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                   </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.findBooks}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {

                        this.state.findedBooks && this.state.findedBooks.length > 0 &&
                        <div>
                            <h4>We found {this.state.findedBooks.length} books </h4>
                            <ol className="books-grid">
                                {

                                    this.state.findedBooks.map((book) =>
                                        <Book key={book.id} book={book} updatebook={this.update} />
                                    )}
                            </ol>
                        </div>

                    }
                    {
                        (this.state.findedBooks.length === 0 && this.state.attemp) && <div className="empty-list">
                            No book found
                     </div>
                    }

                </div>

            </div>

        )
    }
}

export default Inquery;