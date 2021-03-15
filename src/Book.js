import { Component } from "react";
import emptyImg from './icons/no-cover-image.png';
const vals = [
    { value: 'move', name: 'Move to...', disabled: true },
    { value: "currentlyReading", name: 'Currently Reading', disabled: false },
    { value: 'wantToRead', name: 'Want to Read', disabled: false },
    { value: 'read', name: 'Read', disabled: false },
    { value: 'none', name: 'None', disabled: false },
]

class Book extends Component {

    handleOnChange = (event) => {
        this.props.updatebook(this.props.book, event.target.value)
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                width: 128, height: 193,
                                backgroundImage: `url(${(this.props.book.imageLinks && this.props.book.imageLinks.thumbnail)?this.props.book.imageLinks.thumbnail.toString():emptyImg})`
                            }} ></div>
                        <div className="book-shelf-changer">

                            <select value={this.props.book.shelf?this.props.book.shelf:'none'} name="options" onChange={this.handleOnChange} >
                                {vals.map((e) =>
                                    <option key={e.name} value={e.value} disabled={e.disabled}>{e.name}</option>
                                )}
                            </select>

                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(',') : ""}</div>
                </div>
            </li>
        )
    }
}


export default Book;