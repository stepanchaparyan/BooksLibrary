import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookCard } from './BookCard';
import { BooksListContainer,
         BooksListContent,
         BookTitle,
         BooksList
         } from './BooksListStyled';
import M from '../../Messages';

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
            <BooksListContainer>
                <BooksListContent>
                    <BookTitle>{M.get('books.books')}</BookTitle>
                    <BooksList>
                        { this.displayBooks() }
                    </BooksList>
                </BooksListContent>
            </BooksListContainer>
        );
    }
}

export default BookList;