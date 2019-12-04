import React, { Component } from 'react';
import { getAuthorsQuery } from '../../queries/queries';
import PropTypes from 'prop-types';
import { UpdateAuthorContainer,
         UpdateAuthorTitle,
         UpdateAuthorName,
         UpdateAuthorAge,
         UpdateAuthorSelectDiv,
         UpdateAuthorSelect,
         UpdateAuthorLabel,
         UpdateAuthorInput,
         UpdateAuthorButton
        } from './UpdateAuthorStyled';
import localization from './localization';

class UpdateAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            age: ''
        };
    }

    static propTypes = {
        updateAuthorMutation: PropTypes.any,
        data: PropTypes.any,
        formatMessage: PropTypes.any,
    }

    displayAuthors(){
        const { data, formatMessage } = this.props;
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
        this.props.updateAuthorMutation({
            variables: {
                id: this.state.id,
                name: this.state.name,
                age: this.state.age
            },
            refetchQueries: [{ query: getAuthorsQuery }]
        });
        this.setState({
            name: '',
            age: '',
            id: ''
        });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.currentTarget.value
        });
    }

    render(){
        const { formatMessage } = this.props;
        return(
            <UpdateAuthorContainer onSubmit={ this.submitForm.bind(this) } >
                <UpdateAuthorTitle>{formatMessage(localization.updateAuthor)}</UpdateAuthorTitle>
                <UpdateAuthorName>
                    <UpdateAuthorLabel>{formatMessage(localization.authorName)}:</UpdateAuthorLabel>
                    <UpdateAuthorInput type="text" value={ this.state.name } name='name' onChange={ (e) => this.onChange(e)} />
                </UpdateAuthorName>
                <UpdateAuthorAge>
                    <UpdateAuthorLabel>{formatMessage(localization.authorAge)}:</UpdateAuthorLabel>
                    <UpdateAuthorInput type="text" value={ this.state.age } name='age' onChange={ (e) => this.onChange(e)} />
                </UpdateAuthorAge>
                <UpdateAuthorSelectDiv>
                    <UpdateAuthorLabel>{formatMessage(localization.author)}:</UpdateAuthorLabel>
                    <UpdateAuthorSelect name='id' onChange={ (e) => this.onChange(e)} >
                        <option>{formatMessage(localization.selectAuthor)}</option>
                        { this.displayAuthors() }
                    </UpdateAuthorSelect>
                </UpdateAuthorSelectDiv>
                <UpdateAuthorButton>{formatMessage(localization.updateAuthor)}</UpdateAuthorButton>
            </UpdateAuthorContainer>
        );
    }
}

export default UpdateAuthor;
