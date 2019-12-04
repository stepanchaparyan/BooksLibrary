import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
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
import { injectIntl } from "react-intl";
import localization from './localization';

class BookDetails extends Component {
    static propTypes = {
        data: PropTypes.any,
        match: PropTypes.any,
        intl: PropTypes.any,
    }

    render(){
        const { data: { book }, intl: { formatMessage } } = this.props
        if(book){
            return(
                <BookDetailsContainer>
                    <BookDetailsData>
                        <BookName>{ book.name }</BookName>
                        <HR />
                        <BookData className="book-details__book-data">
                            <BookTitle><BooksDetailsSpan>{formatMessage(localization.title)}: </BooksDetailsSpan>{book.name}</BookTitle>
                            <BookGenre><BooksDetailsSpan>{formatMessage(localization.genre)}: </BooksDetailsSpan>{book.genre}</BookGenre>
                            <BookAuthorName><Link to={'/author/' + book.author.id}><BooksDetailsSpan>{formatMessage(localization.author)}: </BooksDetailsSpan>{book.author.name}</Link></BookAuthorName>
                        </BookData>
                        <HR />
                        <BookName>{formatMessage(localization.authorsBooksList)}</BookName>
                        <AuthorBooks>{ book.author.books.map((book, id) => {
                            return <AuthorBooksData key={id}>{book.name}</AuthorBooksData>
                            })
                        }
                        </AuthorBooks>
                    </BookDetailsData>
                </BookDetailsContainer>
            );
        } else {
           return( <Loading>{formatMessage(localization.loading)}</Loading> );
        }
    }
}

export default compose(
    graphql(getBookQuery, {
        options: (props) => {
            return {
                variables: {
                    id: props.match.params.id
                }
            }
        }
    }),
    injectIntl)(BookDetails);