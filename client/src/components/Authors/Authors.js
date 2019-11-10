import React, { Component } from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';
import UpdateAuthor from './UpdateAuthor';

class Authors extends Component {
  render() {
    return (
        <div className="authors">
            <AuthorList />
            <div className="authors__update">
              <AddAuthor />
              <UpdateAuthor />
            </div>
        </div>
    );
  }
}

export { Authors };