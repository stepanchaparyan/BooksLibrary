import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../../queries/queries';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading,
         BookDetailsContainer,
         BookDetailsData,
         BookName,
         BookData,
         HR,
         BookTitle,
         BookGenre,
         BookAuthorName,
         AuthorBooks,
         AuthorBooksData,
         BooksDetailsSpan } from './BookDetailsStyled';
import M from '../../Messages';

class BookDetails extends Component {
    static propTypes = {
        data: PropTypes.any,
        match: PropTypes.any
    }

    render(){
        const { book } = this.props.data;
        console.log("book is: ", book);
        if(book){
            return(
                <BookDetailsContainer>
                    <BookDetailsData>
                        <BookName>{ book.name }</BookName>
                        <HR />
                        <BookData className="book-details__book-data">
                            <BookTitle><BooksDetailsSpan>{M.get('books.title')}: </BooksDetailsSpan>{book.name}</BookTitle>
                            <BookGenre><BooksDetailsSpan>{M.get('books.genre')}: </BooksDetailsSpan>{book.genre}</BookGenre>
                            <BookAuthorName><Link to={'/author/' + book.author.id}><BooksDetailsSpan>{M.get('books.author')}: </BooksDetailsSpan>{book.author.name}</Link></BookAuthorName>
                        </BookData>
                        <HR />
                        <BookName>{M.get('books.authorsBooksList')}</BookName>
                        <AuthorBooks>{ book.author.books.map((book, id) => {
                            return <AuthorBooksData key={id}>{book.name}</AuthorBooksData>
                            })
                        }
                        </AuthorBooks>
                    </BookDetailsData>
                </BookDetailsContainer>
            );
        } else {
           return( <Loading>{M.get('books.loading')}</Loading> );
        }
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.match.params.id
            }
        }
    }
})(BookDetails);
