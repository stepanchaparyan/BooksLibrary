import React, { Component } from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';

class Books extends Component {
  render() {
    return (
        <div className="books">
          <BooksList />
          <div className="books__update">
            <AddBook />
            <UpdateBook />
          </div>
        </div>
    );
  }
}

export { Books };