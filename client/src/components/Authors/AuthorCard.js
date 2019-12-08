import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthorCardContainer,
         AuthorCardImage,
         AuthorCardBody,
         AuthorCardName,
         AuthorCardAge,
         AuthorCardBooks } from './AuthorCardStyled';
import localization from './localization';

class AuthorCard extends Component {
    static propTypes = {
        author: PropTypes.any,
        formatMessage: PropTypes.any,
    }

    render(){
        const { author, formatMessage } = this.props;
        const photo = 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456324.png';
        return(
            <AuthorCardContainer>
                <AuthorCardImage src={ author.photo || photo } alt="image"/>
                <AuthorCardBody>
                    <AuthorCardName>{formatMessage(localization.name)}: { author.name }</AuthorCardName>
                    <AuthorCardAge>{formatMessage(localization.age)}: { author.age }</AuthorCardAge>
                    <AuthorCardBooks>
                        <Link to={'/author/' + author.id}>{formatMessage(localization.loadingAuthors)}</Link>
                    </AuthorCardBooks>
                </AuthorCardBody>
            </AuthorCardContainer>
        );
    }
}

export { AuthorCard };