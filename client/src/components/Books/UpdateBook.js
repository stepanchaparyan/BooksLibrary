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
import localization from './localization';

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
        data: PropTypes.any,
        formatMessage: PropTypes.any,
    }

    displayAuthors(){
        const data = this.props.getAuthorsQuery;
        const { formatMessage } = this.props;
        if(data.loading){
            return( <option disabled>{formatMessage(localization.loading)}</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }
    displayBooks(){
        const { data, formatMessage }= this.props;
        if(data.loading){
            return( <option disabled>{formatMessage(localization.loading)}</option> );
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
        const { formatMessage } = this.props;
        return(
            <UpdateBookForm onSubmit={ this.submitForm.bind(this) } >
                <UpdateBookTitle>{formatMessage(localization.updateBook)}</UpdateBookTitle>
                <UpdateBookName>
                    <UpdateBookLabel>{formatMessage(localization.selectBook)}:</UpdateBookLabel>
                    <UpdateBookSelect onChange={ (e) => this.setState({ bookId: e.target.value }) } >
                        <option>{formatMessage(localization.selectBook)}</option>
                        { this.displayBooks() }
                    </UpdateBookSelect>
                </UpdateBookName>
                <UpdateBookName>
                    <UpdateBookLabel>{formatMessage(localization.bookName)}:</UpdateBookLabel>
                    <UpdateBookInput type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </UpdateBookName>
                <UpdateBookGenre>
                    <UpdateBookLabel>{formatMessage(localization.bookGenre)}:</UpdateBookLabel>
                    <UpdateBookInput type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </UpdateBookGenre>
                <UpdateBookAuthor>
                    <UpdateBookLabel>{formatMessage(localization.bookAuthor)}:</UpdateBookLabel>
                    <UpdateBookSelect onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option>{formatMessage(localization.selectAuthor)}</option>
                        { this.displayAuthors() }
                    </UpdateBookSelect>
                </UpdateBookAuthor>
                <UpdateBookButton>{formatMessage(localization.updateBook)}</UpdateBookButton>
            </UpdateBookForm>
        );
    }
}

export default UpdateBook;