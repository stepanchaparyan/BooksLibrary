import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getBooksQuery, deleteBookMutation } from '../../queries/queries';
import PropTypes from 'prop-types';

// components
// import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    deleteBook = (bookId) => {
        this.props.deleteBookMutation({
            variables: {
                id: bookId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

      displayBooks(){
        var data = this.props.data;
        // console.log('Booklist ', this.props);
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <li key={ book.id } onClick={ () => this.deleteBook(book.id) }>{ book.name }</li>
                );
            })
        }
    }
    render(){
        return(
            <div className="book-list-container">
                <ul className="book-list">
                    { this.displayBooks() }
                </ul>
                {/* <BookDetails bookId={ this.state.selected } /> */}
            </div>
        );
    }
}

BookList.propTypes = {
    data: PropTypes.any,
    deleteBookMutation: PropTypes.any
}

export default compose(
    graphql(getBooksQuery),
    graphql(deleteBookMutation, { name: 'deleteBookMutation' })
)(BookList);