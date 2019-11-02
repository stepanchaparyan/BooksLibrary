import React, { Component, Fragment } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';

class Books extends Component {
  render() {
    return (
        <Fragment>
            <h1>Books</h1>
            <BookList />
            <AddBook />
            <UpdateBook />
        </Fragment>
    );
  }
}

export default Books;