import React, { Component, Fragment } from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';
// import UpdateAuthor from './UpdateAuthor';

class Authors extends Component {
  render() {
    return (
        <Fragment>
            <div className="author-title">AUTHORS</div>
            <AuthorList />
            <AddAuthor />
            {/* <UpdateAuthor /> */}
        </Fragment>
    );
  }
}

export default Authors;