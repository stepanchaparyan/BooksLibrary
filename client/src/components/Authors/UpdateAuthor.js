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
import M from '../../Messages';

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
    }

    displayAuthors(){
        const { data } = this.props;
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
        return(
            <UpdateAuthorContainer onSubmit={ this.submitForm.bind(this) } >
                <UpdateAuthorTitle>{M.get('authors.updateAuthor')}</UpdateAuthorTitle>
                <UpdateAuthorName>
                    <UpdateAuthorLabel>{M.get('authors.authorName')}:</UpdateAuthorLabel>
                    <UpdateAuthorInput type="text" value={ this.state.name } name='name' onChange={ (e) => this.onChange(e)} />
                </UpdateAuthorName>
                <UpdateAuthorAge>
                    <UpdateAuthorLabel>{M.get('authors.authorAge')}:</UpdateAuthorLabel>
                    <UpdateAuthorInput type="text" value={ this.state.age } name='age' onChange={ (e) => this.onChange(e)} />
                </UpdateAuthorAge>
                <UpdateAuthorSelectDiv>
                    <UpdateAuthorLabel>{M.get('authors.author')}:</UpdateAuthorLabel>
                    <UpdateAuthorSelect name='id' onChange={ (e) => this.onChange(e)} >
                        <option>{M.get('authors.selectAuthor')}</option>
                        { this.displayAuthors() }
                    </UpdateAuthorSelect>
                </UpdateAuthorSelectDiv>
                <UpdateAuthorButton>{M.get('authors.updateAuthor')}</UpdateAuthorButton>
            </UpdateAuthorContainer>
        );
    }
}

export default UpdateAuthor;
