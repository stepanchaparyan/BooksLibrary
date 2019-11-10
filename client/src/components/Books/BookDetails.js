import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../../queries/queries';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BookDetails extends Component {
    static propTypes = {
        data: PropTypes.any,
        match: PropTypes.any
    }

    render(){
        const { book } = this.props.data;
        console.log("book is: ", book);
        if(book){
            return(
                <div className="book-details__container">
                    <div className="book-details">
                        <div className="book-details__name">{ book.name }</div>
                        <hr />
                        <div className="book-details__book-data">
                            <div className="book-details__book-title"><span>Title:</span>{book.name}</div>
                            <div className="book-details__book-genre"><span>Genre:</span>{book.genre}</div>
                            <div className="book-details__book-author__name"><Link to={'/author/' + book.author.id}><span>Author:</span>{book.author.name}</Link></div>
                        </div>
                        <hr />
                        <div className="book-details__name">Authors books list</div>
                        <div className="book-details__author-books">{ book.author.books.map((book, id) => {
                            return <div className="book-details__author-book-data" key={id}>{book.name}</div>
                            })
                        }
                        </div>
                    </div>
                </div>
            );
        } else {
           return( <div className="loading-data">Loading ...</div> );
        }
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.match.params.id
            }
        }
    }
})(BookDetails);
