import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthorCardContainer,
         AuthorCardImageContainer,
         AuthorCardImage,
         AuthorCardBody,
         AuthorCardName,
         AuthorCardAge,
         AuthorCardBooks } from './AuthorCardStyled';
import M from '../../Messages';

class AuthorCard extends Component {
    static propTypes = {
        author: PropTypes.any,
    }

    render(){
        const { author } = this.props;
        const photo = 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456324.png';
        return(
            <AuthorCardContainer>
                <AuthorCardImageContainer>
                    <AuthorCardImage src={ author.photo || photo } alt="image"/>
                </AuthorCardImageContainer>
                <AuthorCardBody>
                    <AuthorCardName>{M.get('authors.name')}: { author.name }</AuthorCardName>
                    <AuthorCardAge>{M.get('authors.age')}: { author.age }</AuthorCardAge>
                    <AuthorCardBooks>
                        <Link to={'/author/' + author.id}>{M.get('authors.booksListHere')}</Link>
                    </AuthorCardBooks>
                </AuthorCardBody>
            </AuthorCardContainer>
        );
    }
}

export { AuthorCard };