import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userImage from '../../assets/user.jpeg';
import { Link } from 'react-router-dom';

class BookCard extends Component {
    static propTypes = {
        book: PropTypes.any,
        onClick: PropTypes.any
    }

    render(){
        const { book } = this.props;
        return(
            <div className="book-card">
                <div className="book-card__image-div">
                    <img className="book-card__image" src={userImage} alt="image"/>
                </div>
                <div className="book-card__body">
                    <div className="book-card__name" onClick={ this.props.onClick }>Name: {book.name}</div>
                    <div className="book-card__genre">Genre: {book.genre}</div>
                    <div className="book-card__author"><Link to={'/book/' + book.id} >Author data here</Link></div>
                </div>
            </div>
        );
    }
}

export { BookCard };