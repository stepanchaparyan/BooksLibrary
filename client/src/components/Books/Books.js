import React, { Component } from "react";
import BooksList from "./BooksList";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import { graphql, compose } from "react-apollo";
import { getBooksQuery, deleteBookMutation } from "../../queries/queries";
import PropTypes from "prop-types";

class Books extends Component {
  static propTypes = {
    data: PropTypes.any,
    deleteBookMutation: PropTypes.any
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
    const { data } = this.props;
    return (
      <div className="books">
        <BooksList
            data={ data }
            deleteBook={ this.deleteBook }
        />
        <div className="books__update">
          <AddBook />
          <UpdateBook />
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(getBooksQuery),
  graphql(deleteBookMutation, { name: "deleteBookMutation" })
)(Books);
