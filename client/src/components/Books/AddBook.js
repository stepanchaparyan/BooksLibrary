import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../../queries/queries';
import PropTypes from 'prop-types';

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }
    displayAuthors(){
        const data = this.props.getAuthorsQuery;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }
    render(){
        return(
            <form className="add-book" onSubmit={ this.submitForm.bind(this) } >
                <div className="add-book__title">Add Book</div>
                <div className="add-book__name">
                    <label className="add-book__label">Book name:</label>
                    <input className="add-book__input" type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="add-book__genre">
                    <label className="add-book__label">Book genre:</label>
                    <input className="add-book__input" type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div className="add-book__author">
                    <label className="add-book__label">Book author:</label>
                    <select className="add-book__select" onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option className="add-book__option">Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button className="add-book__button">Add book</button>
            </form>
        );
    }
}

AddBook.propTypes = {
    getAuthorsQuery: PropTypes.any,
    addBookMutation: PropTypes.any
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
