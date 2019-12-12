import React from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';
import UpdateAuthor from './UpdateAuthor';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addAuthorMutation, updateAuthorMutation } from '../../queries/queries';
import PropTypes from 'prop-types';
import { AuthorsAddAndUpdateContainer } from './AuthorsStyled';
import { injectIntl } from 'react-intl';

const Authors = ({ data, addAuthorMutation, updateAuthorMutation, intl: { formatMessage } }) => {
  return (
    <>
      <AuthorList
          data={ data }
          formatMessage={ formatMessage }
      />
      <AuthorsAddAndUpdateContainer>
          <AddAuthor
              addAuthorMutation={ addAuthorMutation }
              formatMessage={ formatMessage }
          />
          <UpdateAuthor
              updateAuthorMutation={ updateAuthorMutation }
              data={ data }
              formatMessage={ formatMessage }
          />
      </AuthorsAddAndUpdateContainer>
    </>
  );
}

Authors.propTypes = {
  data: PropTypes.any,
  addAuthorMutation: PropTypes.any,
  updateAuthorMutation: PropTypes.any,
  intl: PropTypes.any,
}

export default compose(
  graphql(getAuthorsQuery),
  graphql(addAuthorMutation, { name: "addAuthorMutation" }),
  graphql(updateAuthorMutation, { name: 'updateAuthorMutation' }),
  injectIntl)(Authors);