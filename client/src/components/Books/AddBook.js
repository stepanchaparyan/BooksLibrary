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
import localization from './localization';

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
        formatMessage: PropTypes.any,
    }

    displayAuthors(){
        const { formatMessage } = this.props;
        const data = this.props.getAuthorsQuery;
        if(data.loading){
            return( <option disabled>{formatMessage(localization.loading)}</option> );
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
        const { formatMessage } = this.props;
        return(
            <AddBookForm onSubmit={ this.submitForm.bind(this) } >
                <AddBookTitle>{formatMessage(localization.addBook)}</AddBookTitle>
                <AddBookName>
                    <AddBookLabel>{formatMessage(localization.bookName)}:</AddBookLabel>
                    <AddBookInput type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </AddBookName>
                <AddBookGenre>
                    <AddBookLabel>{formatMessage(localization.bookGenre)}:</AddBookLabel>
                    <AddBookInput type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </AddBookGenre>
                <AddBookAuthor>
                    <AddBookLabel>{formatMessage(localization.bookAuthor)}:</AddBookLabel>
                    <AddBookSelect onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option className="add-book__option">{formatMessage(localization.selectBook)}</option>
                        { this.displayAuthors() }
                    </AddBookSelect>
                </AddBookAuthor>
                <AddBookButton>{formatMessage(localization.addBook)}</AddBookButton>
            </AddBookForm>
        );
    }
}

export default AddBook;