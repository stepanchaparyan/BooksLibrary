import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookCard } from './BookCard';

class BookList extends Component {
    static propTypes = {
        data: PropTypes.any,
        deleteBook: PropTypes.any,
    }

    displayBooks(){
        const { data, deleteBook } = this.props;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <BookCard
                        book={ book }
                        key={ book.id }
                        onClick={ () => deleteBook(book.id) }
                    />
                );
            })
        }
    }
    render(){
        return(
            <div className="book-list__container">
                <div className="book-list__content">
                    <div className="book-title">BOOKS</div>
                    <ul className="book-list">
                        { this.displayBooks() }
                    </ul>
                </div>
            </div>
        );
    }
}

export default BookList;