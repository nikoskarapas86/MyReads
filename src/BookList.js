import { Component } from "react";
import Book from "./Book";

const typeOfBooks = [{ type: "currentlyReading", title: "Currently Reading", list: [] }, { type: "wantToRead", title: "Want to Read", list: [] }, { type: "read", title: "Read", list: [] }]
class BookList extends Component {

update =(book,shelf)=>{
this.props.updatebook(book,shelf)
}

    render() {
        
        return (
            <div>
                {typeOfBooks.map(type =>

                    <div key={type.title}>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{type.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books.filter(book => book.shelf === type.type).map(
                                       (book,index)  =>

                                            <Book key={index} book={book} updatebook={this.update} />


                                    )
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        )
    }


}
export default BookList;