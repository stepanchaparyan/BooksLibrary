import React, { Component } from 'react';
import { getBooksQuery } from '../../queries/queries';
import PropTypes from 'prop-types';
import { UpdateBookForm,
         UpdateBookTitle,
         UpdateBookName,
         UpdateBookGenre,
         UpdateBookAuthor,
         UpdateBookLabel,
         UpdateBookInput,
         UpdateBookSelect,
         UpdateBookButton } from './UpdateBookStyled';
import M from '../../Messages';

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
            <UpdateBookForm onSubmit={ this.submitForm.bind(this) } >
                <UpdateBookTitle>{M.get('books.updateBook')}</UpdateBookTitle>
                <UpdateBookName>
                    <UpdateBookLabel>{M.get('books.selectBook')}:</UpdateBookLabel>
                    <UpdateBookSelect onChange={ (e) => this.setState({ bookId: e.target.value }) } >
                        <option>{M.get('books.selectBook')}</option>
                        { this.displayBooks() }
                    </UpdateBookSelect>
                </UpdateBookName>
                <UpdateBookName>
                    <UpdateBookLabel>{M.get('books.bookName')}:</UpdateBookLabel>
                    <UpdateBookInput type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </UpdateBookName>
                <UpdateBookGenre>
                    <UpdateBookLabel>{M.get('books.bookGenre')}:</UpdateBookLabel>
                    <UpdateBookInput type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </UpdateBookGenre>
                <UpdateBookAuthor>
                    <UpdateBookLabel>{M.get('books.bookAuthor')}:</UpdateBookLabel>
                    <UpdateBookSelect onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option>{M.get('books.selectAuthor')}</option>
                        { this.displayAuthors() }
                    </UpdateBookSelect>
                </UpdateBookAuthor>
                <UpdateBookButton>{M.get('books.updateBook')}</UpdateBookButton>
            </UpdateBookForm>
        );
    }
}

export default UpdateBook;