import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getAuthorsQuery, getBooksQuery } from '../../queries/queries';
import PropTypes from 'prop-types';

// components
// import BookDetails from '../Books/BookDetails';
import AuthorDetails from './AuthorDetails';

class AuthorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayAuthors(){
        var data = this.props.data;
        // console.log('AuthorList ', this.props);
        if(data.loading){
            return( <div>Loading authors...</div> );
        } else {
            return data.authors.map(author => {
                return(
                    <li key={ author.id } onClick={ () => this.setState({ selected: author.id }) }>{ author.name }</li>
                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="author-list">
                    { this.displayAuthors() }
                </ul>
                <AuthorDetails authorId={this.state.selected} />
            </div>
        );
    }
}

AuthorList.propTypes = {
    data: PropTypes.any
}

export default graphql(getAuthorsQuery, getBooksQuery)(AuthorList);
