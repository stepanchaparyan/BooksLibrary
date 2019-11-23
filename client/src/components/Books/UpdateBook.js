import React, { Component } from 'react';
import { getBooksQuery } from '../../queries/queries';
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

    static propTypes = {
        updateBookMutation: PropTypes.any,
        getAuthorsQuery: PropTypes.any,
        getBooksQuery: PropTypes.any,
        data: PropTypes.any
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
    displayBooks(){
        const { data }= this.props;
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
        return(
            <form className="update-book" onSubmit={ this.submitForm.bind(this) } >
                <div className="update-book__title">Update Book</div>
                <div className="update-book__name">
                    <label className="update-book__label">Select book:</label>
                    <select className="update-book__select" onChange={ (e) => this.setState({ bookId: e.target.value }) } >
                        <option>Select book</option>
                        { this.displayBooks() }
                    </select>
                </div>
                <div className="update-book__name">
                    <label className="update-book__label">Book name:</label>
                    <input className="update-book__input" type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="update-book__genre">
                    <label className="update-book__label">Book genre:</label>
                    <input className="update-book__input" type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div className="update-book__author">
                    <label className="update-book__label">Book author:</label>
                    <select className="update-book__select" onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button className="update-book__button">Update book</button>
            </form>
        );
    }
}

export default UpdateBook;