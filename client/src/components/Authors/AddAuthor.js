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
import localization from './localization';

class AddAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: ''
        };
    }

    static propTypes = {
        addAuthorMutation: PropTypes.any,
        formatMessage: PropTypes.any,
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
        const { formatMessage } = this.props;
        return(
            <AddAuthorForm onSubmit={ this.submitForm.bind(this) } >
                <AddAuthorTitle>{formatMessage(localization.addAuthor)}</AddAuthorTitle>
                <AddAuthorName>
                    <AddAuthorLabel>{formatMessage(localization.authorName)}:</AddAuthorLabel>
                    <AddAuthorInput type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </AddAuthorName>
                <AddAuthorAge>
                    <AddAuthorLabel>{formatMessage(localization.authorAge)}:</AddAuthorLabel>
                    <AddAuthorInput type="text" onChange={ (e) => this.setState({ age: e.target.value }) } />
                </AddAuthorAge>
                <AddAuthorButton>{formatMessage(localization.addAuthor)}</AddAuthorButton>
            </AddAuthorForm>
        );
    }
}

export default AddAuthor;
