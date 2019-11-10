import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getBooksQuery, deleteBookMutation } from '../../queries/queries';
import PropTypes from 'prop-types';
import { BookCard } from './BookCard';

class BookList extends Component {

    deleteBook = (bookId) => {
        this.props.deleteBookMutation({
            variables: {
                id: bookId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    displayBooks(){
        const data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <BookCard
                        book={ book }
                        key={ book.id }
                        onClick={ () => this.deleteBook(book.id) }
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

BookList.propTypes = {
    data: PropTypes.any,
    deleteBookMutation: PropTypes.any,

}

export default compose(
    graphql(getBooksQuery),
    graphql(deleteBookMutation, { name: 'deleteBookMutation' })
)(BookList);