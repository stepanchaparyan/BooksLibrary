import React, { Component } from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';
import UpdateAuthor from './UpdateAuthor';
import { graphql } from 'react-apollo';
import {getAuthorsQuery, getBooksQuery } from '../../queries/queries';
import PropTypes from 'prop-types';

class Authors extends Component {
  static propTypes = {
    data: PropTypes.any
  }

  render() {
    const data = this.props.data;
    return (
        <div className="authors">
            <AuthorList data={ data } />
            <div className="authors__update">
              <AddAuthor />
              <UpdateAuthor />
            </div>
        </div>
    );
  }
}

export default graphql(getAuthorsQuery, getBooksQuery)(Authors);