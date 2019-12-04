import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookCard } from './BookCard';
import { BooksListContainer,
         BooksListContent,
         BookTitle,
         BooksList
         } from './BooksListStyled';
import localization from './localization';

class BookList extends Component {
    static propTypes = {
        data: PropTypes.any,
        deleteBook: PropTypes.any,
        formatMessage: PropTypes.any,
    }

    displayBooks(){
        const { formatMessage, data, deleteBook } = this.props;
        if(data.loading){
            return( <div>{formatMessage(localization.loading)}</div> );
        } else {
            return data.books.map(book => {
                return(
                    <BookCard
                        book={ book }
                        key={ book.id }
                        onClick={ () => deleteBook(book.id) }
                        formatMessage={ formatMessage }
                    />
                );
            })
        }
    }
    render(){
        const { formatMessage } = this.props;
        return(
            <BooksListContainer>
                <BooksListContent>
                    <BookTitle>{formatMessage(localization.books)}</BookTitle>
                    <BooksList>
                        { this.displayBooks() }
                    </BooksList>
                </BooksListContent>
            </BooksListContainer>
        );
    }
}

export default BookList;