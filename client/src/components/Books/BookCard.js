import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BookCardContainer,
         BookCardImage,
         BookCardBody,
         BookCardName,
         BookCardGenre
         } from './BookCardStyled';
import M from '../../Messages';

class BookCard extends Component {
    static propTypes = {
        book: PropTypes.any,
        onClick: PropTypes.any
    }

    render(){
        const { book } = this.props;
        console.log(book)
        const photo = 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456322.png';
        return(
            <BookCardContainer>
                <BookCardImage src={ book.photo || photo } alt="image"/>
                <BookCardBody className="book-card__body">
                    <BookCardName onClick={ this.props.onClick }>{M.get('books.name')}: {book.name}</BookCardName>
                    <BookCardGenre>{M.get('books.genre')}: {book.genre}</BookCardGenre>
                    <Link to={'/book/' + book.id}>{M.get('books.authorDataHere')}</Link>
                </BookCardBody>
            </BookCardContainer>
        );
    }
}

export { BookCard };