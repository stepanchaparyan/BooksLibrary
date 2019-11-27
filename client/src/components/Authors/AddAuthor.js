import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAuthorsQuery } from '../../queries/queries';
import { AddAuthorTitle,
         AddAuthorName,
         AddAuthorAge,
         AddAuthorLabel,
         AddAuthorInput,
         AddAuthorButton,
         AddAuthorForm } from './AddAuthorStyled';
import M from '../../Messages';

class AddAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: ''
        };
    }

    static propTypes = {
        addAuthorMutation: PropTypes.any
    }

    submitForm(e){
        e.preventDefault()
        this.props.addAuthorMutation({
            variables: {
                name: this.state.name,
                age: this.state.age
            },
            refetchQueries: [{ query: getAuthorsQuery }]
        });
    }
    render(){
        return(
            <AddAuthorForm onSubmit={ this.submitForm.bind(this) } >
                <AddAuthorTitle>{M.get('authors.addAuthor')}</AddAuthorTitle>
                <AddAuthorName>
                    <AddAuthorLabel>{M.get('authors.authorName')}:</AddAuthorLabel>
                    <AddAuthorInput type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </AddAuthorName>
                <AddAuthorAge>
                    <AddAuthorLabel>{M.get('authors.authorAge')}:</AddAuthorLabel>
                    <AddAuthorInput type="text" onChange={ (e) => this.setState({ age: e.target.value }) } />
                </AddAuthorAge>
                <AddAuthorButton>{M.get('authors.addAuthor')}</AddAuthorButton>
            </AddAuthorForm>
        );
    }
}

export default AddAuthor;
