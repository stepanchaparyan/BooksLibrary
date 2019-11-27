import React, { Component } from 'react';
import { getBooksQuery } from '../../queries/queries';
import PropTypes from 'prop-types';
import { AddBookForm,
         AddBookTitle,
         AddBookName,
         AddBookGenre,
         AddBookAuthor,
         AddBookLabel,
         AddBookInput,
         AddBookSelect,
         AddBookButton } from './AddBookStyled';
import M from '../../Messages';

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    static propTypes = {
        addBookMutation: PropTypes.any,
        getAuthorsQuery: PropTypes.any,
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
            <AddBookForm onSubmit={ this.submitForm.bind(this) } >
                <AddBookTitle>{M.get('books.addBook')}</AddBookTitle>
                <AddBookName>
                    <AddBookLabel>{M.get('books.bookName')}:</AddBookLabel>
                    <AddBookInput type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </AddBookName>
                <AddBookGenre>
                    <AddBookLabel>{M.get('books.bookGenre')}:</AddBookLabel>
                    <AddBookInput type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </AddBookGenre>
                <AddBookAuthor>
                    <AddBookLabel>{M.get('books.bookAuthor')}:</AddBookLabel>
                    <AddBookSelect onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option className="add-book__option">{M.get('books.selectBook')}</option>
                        { this.displayAuthors() }
                    </AddBookSelect>
                </AddBookAuthor>
                <AddBookButton>{M.get('books.addBook')}</AddBookButton>
            </AddBookForm>
        );
    }
}

export default AddBook;