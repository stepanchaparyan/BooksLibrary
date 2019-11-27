import React, { Component } from "react";
import BooksList from "./BooksList";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import { graphql, compose } from "react-apollo";
import { getBooksQuery, getAuthorsQuery, addBookMutation, deleteBookMutation, updateBookMutation } from "../../queries/queries";
import PropTypes from "prop-types";
import { BooksUpdateContainer } from './BooksStyled';

class Books extends Component {
  static propTypes = {
    data: PropTypes.any,
    deleteBookMutation: PropTypes.any,
    getAuthorsQuery: PropTypes.any,
    addBookMutation: PropTypes.any,
    updateBookMutation: PropTypes.any,
  };

  deleteBook = bookId => {
    this.props.deleteBookMutation({
      variables: {
        id: bookId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  render() {
    const { data, getAuthorsQuery, addBookMutation, updateBookMutation } = this.props;
    return (
      <>
        <BooksList
            data={ data }
            deleteBook={ this.deleteBook }
        />
        <BooksUpdateContainer>
          <AddBook
              addBookMutation={ addBookMutation }
              getAuthorsQuery={ getAuthorsQuery }
          />
          <UpdateBook
              data={ data }
              updateBookMutation={ updateBookMutation }
              getAuthorsQuery={ getAuthorsQuery }
          />
        </BooksUpdateContainer>
      </>
    );
  }
}

export default compose(
  graphql(getBooksQuery),
  graphql(deleteBookMutation, { name: "deleteBookMutation" }),
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' }),
  graphql(updateBookMutation, { name: 'updateBookMutation' })
)(Books);
