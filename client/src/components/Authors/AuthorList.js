import React from 'react';
import PropTypes from 'prop-types';
import { AuthorCard } from './AuthorCard';
import { AuthorsListContainer,
         AuthorsListContent,
         AuthorTitle,
         AuthorsList,
         AuthorsListLoading } from './AuthorListStyled';
import localization from './localization';

const AuthorList = ({ formatMessage, data }) => {

    const displayAuthors = () => {
        if(data.loading){
            return( <AuthorsListLoading>{formatMessage(localization.loadingAuthors)}</AuthorsListLoading> );
        } else {
            return data.authors.map(author => {
                return(
                    <AuthorCard
                        author={ author }
                        key={ author.id }
                        formatMessage={ formatMessage }
                    />
                );
            })
        }
    }
    return(
        <>
            <AuthorsListContainer>
                <AuthorsListContent>
                    <AuthorTitle>{formatMessage(localization.authors)}</AuthorTitle>
                    <AuthorsList>
                        { displayAuthors() }
                    </AuthorsList>
                </AuthorsListContent>
            </AuthorsListContainer>
        </>
    );
}

AuthorList.propTypes = {
    data: PropTypes.any,
    formatMessage: PropTypes.any,
}

export default AuthorList;
