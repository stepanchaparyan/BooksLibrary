import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorQuery } from '../../queries/queries';
import PropTypes from 'prop-types';

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
                <div className="author-details__container">
                    <div className="author-details">
                        <div className="author-details__name">{ author.name }</div>
                        <hr />
                        <div className="author-details__books">{ author.books.map((book, id) => {
                            return <div className="author-details__book-data" key={id}>
                                        <div className="author-details__book-title"><span className="author-details__book-title_span">Title:</span>{book.name}</div>
                                        <div className="author-details__book-genre"><span className="author-details__book-title_span">Genre:</span>{book.genre}</div>
                                    </div>
                            })
                        }
                        </div>
                    </div>
                </div>
            );
        } else {
           return( <div className="loading-data">Loading ...</div> );
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
