import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import {getAuthorsQuery, getBooksQuery } from '../../queries/queries';
import PropTypes from 'prop-types';
import { AuthorCard } from './AuthorCard';

class AuthorList extends Component {

    displayAuthors(){
        const data = this.props.data;
        if(data.loading){
            return( <div>Loading authors...</div> );
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
            <Fragment>
                <div className="author-list__container">
                    <div className="author-list__content">
                        <div className="author-title">AUTHORS</div>
                        <ul className="author-list">
                           { this.displayAuthors() }
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

AuthorList.propTypes = {
    data: PropTypes.any
}

export default graphql(getAuthorsQuery, getBooksQuery)(AuthorList);
