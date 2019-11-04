import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorQuery } from '../../queries/queries';
import PropTypes from 'prop-types';

class AuthorDetails extends Component {
    displayAuthorDetails(){
        const { author } = this.props.data;
        if(author){
            return(
                <div>
                    <h2>{ author.name }</h2>
                    <p>{ author.age }</p>
                </div>
            );
        } else {
            return( <div>No author selected...</div> );
        }
    }
    render(){
        return(
            <div id="author-details">
                { this.displayAuthorDetails() }
            </div>
        );
    }
}

AuthorDetails.propTypes = {
    data: PropTypes.any
}

export default graphql(getAuthorQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.authorId
            }
        }
    }
})(AuthorDetails);
