import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthorCard } from './AuthorCard';
import { AuthorsListContainer,
         AuthorsListContent,
         AuthorTitle,
         AuthorsList,
         AuthorsListLoading } from './AuthorListStyled';
import localization from './localization';

class AuthorList extends Component {
    static propTypes = {
        data: PropTypes.any,
        formatMessage: PropTypes.any,
    }

    displayAuthors(){
        const { formatMessage, data } = this.props;
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
    render(){
        const { formatMessage } = this.props;
        return(
            <>
                <AuthorsListContainer>
                    <AuthorsListContent>
                        <AuthorTitle>{formatMessage(localization.authors)}</AuthorTitle>
                        <AuthorsList>
                            { this.displayAuthors() }
                        </AuthorsList>
                    </AuthorsListContent>
                </AuthorsListContainer>
            </>
        );
    }
}

export default AuthorList;
