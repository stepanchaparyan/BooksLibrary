import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthorCard } from './AuthorCard';
import { AuthorsListContainer,
         AuthorsListContent,
         AuthorTitle,
         AuthorsList,
         AuthorsListLoading } from './AuthorListStyled';
import M from '../../Messages';

class AuthorList extends Component {
    static propTypes = {
        data: PropTypes.any
    }

    displayAuthors(){
        const data = this.props.data;
        if(data.loading){
            return( <AuthorsListLoading>{M.get('authors.loadingAuthors')}</AuthorsListLoading> );
        } else {
            return data.authors.map(author => {
                return(
                    <AuthorCard
                        author={author}
                        key={ author.id }
                    />
                );
            })
        }
    }
    render(){
        return(
            <>
                <AuthorsListContainer>
                    <AuthorsListContent>
                        <AuthorTitle>{M.get('authors.authors')}</AuthorTitle>
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
