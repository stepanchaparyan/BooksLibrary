import React, { Component, Fragment } from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';
// import UpdateAuthor from './UpdateAuthor';

class Authors extends Component {
  render() {
    return (
        <Fragment>
            <h1>Authors</h1>
            <AuthorList />
            <AddAuthor />
            {/* <UpdateAuthor /> */}
        </Fragment>
    );
  }
}

export default Authors;