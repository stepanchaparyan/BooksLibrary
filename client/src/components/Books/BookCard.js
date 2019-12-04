import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BookCardContainer,
         BookCardImage,
         BookCardBody,
         BookCardName,
         BookCardGenre
         } from './BookCardStyled';
import localization from './localization';

class BookCard extends Component {
    static propTypes = {
        book: PropTypes.any,
        onClick: PropTypes.any,
        formatMessage: PropTypes.any,
    }

    render(){
        const { book, formatMessage } = this.props;
        const photo = 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456322.png';
        return(
            <BookCardContainer>
                <BookCardImage src={ book.photo || photo } alt="image"/>
                <BookCardBody className="book-card__body">
                    <BookCardName onClick={ this.props.onClick }>{formatMessage(localization.name)}: {book.name}</BookCardName>
                    <BookCardGenre>{formatMessage(localization.genre)}: {book.genre}</BookCardGenre>
                    <Link to={'/book/' + book.id}>{formatMessage(localization.authorDataHere)}</Link>
                </BookCardBody>
            </BookCardContainer>
        );
    }
}

export { BookCard };