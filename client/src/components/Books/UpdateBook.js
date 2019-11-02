import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, updateBookMutation, getBooksQuery } from '../../queries/queries';
import PropTypes from 'prop-types';

class UpdateBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: '',
            id: ''
        };
    }
    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }
    displayBooks(){
        var data = this.props.getBooksQuery;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.books.map(book => {
                return( <option key={ book.id } value={book.id}>{ book.name }</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()
        this.props.updateBookMutation({
            variables: {
                id: this.state.bookId,
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
                
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }
    render(){
        // console.log(this.state)
        return(
            <form id="update-book" onSubmit={ this.submitForm.bind(this) } >
                <h2>Update Book</h2>
                <div className="field">
                    <label>Book ID:</label>
                    <select onChange={ (e) => this.setState({ bookId: e.target.value }) } >
                        <option>Select book</option>
                        { this.displayBooks() }
                    </select>
                </div>

                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button id="plusBtn">Update book</button>
            </form>
        );
    }
}

UpdateBook.propTypes = {
    updateBookMutation: PropTypes.any,
    getAuthorsQuery: PropTypes.any,
    getBooksQuery: PropTypes.any
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(getBooksQuery, { name: 'getBooksQuery' }),
    graphql(updateBookMutation, { name: 'updateBookMutation' })
)(UpdateBook);
