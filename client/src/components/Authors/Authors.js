import React, { Component } from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';
import UpdateAuthor from './UpdateAuthor';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addAuthorMutation } from '../../queries/queries';
import PropTypes from 'prop-types';

class Authors extends Component {
  static propTypes = {
    data: PropTypes.any,
    addAuthorMutation: PropTypes.any,
  }

  render() {
    const { data, addAuthorMutation } = this.props;
    return (
        <div className="authors">
            <AuthorList data={ data } />
            <div className="authors__update">
              <AddAuthor
                  addAuthorMutation={ addAuthorMutation }
              />
              <UpdateAuthor />
            </div>
        </div>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery),
  graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(Authors);