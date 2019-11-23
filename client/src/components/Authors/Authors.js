import React, { Component } from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';
import UpdateAuthor from './UpdateAuthor';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addAuthorMutation, updateAuthorMutation } from '../../queries/queries';
import PropTypes from 'prop-types';

class Authors extends Component {
  static propTypes = {
    data: PropTypes.any,
    addAuthorMutation: PropTypes.any,
    updateAuthorMutation: PropTypes.any,
  }

  render() {
    const { data, addAuthorMutation, updateAuthorMutation } = this.props;
    return (
        <div className="authors">
            <AuthorList data={ data } />
            <div className="authors__update">
              <AddAuthor
                  addAuthorMutation={ addAuthorMutation }
              />
              <UpdateAuthor
                  updateAuthorMutation={ updateAuthorMutation }
                  data={ data }
              />
            </div>
        </div>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery),
  graphql(addAuthorMutation, { name: "addAuthorMutation" }),
  graphql(updateAuthorMutation, { name: 'updateAuthorMutation' })
)(Authors);