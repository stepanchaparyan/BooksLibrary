import React, { Component } from 'react';
import { graphql } from 'react-apollo';
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
import M from '../../Messages';

class AuthorDetails extends Component {
    static propTypes = {
        data: PropTypes.any,
        match: PropTypes.any
    }

    render(){
        const { author } = this.props.data;
        console.log("author is: ", author);
        if(author){
            return(
                <AuthorDetailsContainer>
                    <AuthorDetailsContent>
                        <AuthorDetailsName>{ author.name }</AuthorDetailsName>
                        <AuthorDetailsName>{M.get('authors.booksList')}</AuthorDetailsName>
                        <AuthorDetailsHR />
                        <AuthorDetailsBooks>{ author.books.map((book, id) => {
                            return <AuthorDetailsBookData key={id}>
                                        <AuthorDetailsBookTitle>
                                            <AuthorDetailsBookTitleSpan>{M.get('authors.title')}:</AuthorDetailsBookTitleSpan>{book.name}
                                        </AuthorDetailsBookTitle>
                                        <AuthorDetailsBookGenre>
                                            <AuthorDetailsBookGenreSpan>{M.get('authors.genre')}:</AuthorDetailsBookGenreSpan>{book.genre}
                                        </AuthorDetailsBookGenre>
                                    </AuthorDetailsBookData>
                            })
                        }
                        </AuthorDetailsBooks>
                    </AuthorDetailsContent>
                </AuthorDetailsContainer>
            );
        } else {
           return( <AuthorDetailsLoading>{M.get('authors.loading')}</AuthorDetailsLoading> );
        }
    }
}

export default graphql(getAuthorQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.match.params.id
            }
        }
    }
})(AuthorDetails);
