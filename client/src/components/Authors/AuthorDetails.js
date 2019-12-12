import React from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorQuery } from '../../queries/queries';
import PropTypes from 'prop-types';
import { AuthorDetailsContainer,
         AuthorDetailsContent,
         AuthorDetailsName,
         AuthorDetailsBooks,
         AuthorDetailsBookData,
         AuthorDetailsBookTitle,
         AuthorDetailsBookTitleSpan,
         AuthorDetailsBookGenre,
         AuthorDetailsBookGenreSpan,
         AuthorDetailsHR,
         AuthorDetailsLoading
         } from './AuthorDetailsStyled';
import { injectIntl } from "react-intl";
import localization from './localization';

const AuthorDetails = ({ data: { author }, intl: { formatMessage } }) => {
    if(author){
        return(
            <AuthorDetailsContainer>
                <AuthorDetailsContent>
                    <AuthorDetailsName>{ author.name }</AuthorDetailsName>
                    <AuthorDetailsName>{formatMessage(localization.booksList)}</AuthorDetailsName>
                    <AuthorDetailsHR />
                    <AuthorDetailsBooks>{ author.books.map((book, id) => {
                        return <AuthorDetailsBookData key={id}>
                                    <AuthorDetailsBookTitle>
                                        <AuthorDetailsBookTitleSpan>{formatMessage(localization.title)}:</AuthorDetailsBookTitleSpan>{book.name}
                                    </AuthorDetailsBookTitle>
                                    <AuthorDetailsBookGenre>
                                        <AuthorDetailsBookGenreSpan>{formatMessage(localization.genre)}:</AuthorDetailsBookGenreSpan>{book.genre}
                                    </AuthorDetailsBookGenre>
                                </AuthorDetailsBookData>
                        })
                    }
                    </AuthorDetailsBooks>
                </AuthorDetailsContent>
            </AuthorDetailsContainer>
        );
    } else {
        return( <AuthorDetailsLoading>{formatMessage(localization.loading)}</AuthorDetailsLoading> );
    }
}

AuthorDetails.propTypes = {
    data: PropTypes.any,
    match: PropTypes.any,
    intl: PropTypes.any,
}

export default compose(
    graphql(getAuthorQuery, {
        options: (props) => {
            return {
                variables: {
                    id: props.match.params.id
                }
            }
        }
    }),
    injectIntl)(AuthorDetails);