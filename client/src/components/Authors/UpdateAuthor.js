import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, updateAuthorMutation } from '../../queries/queries';
import PropTypes from 'prop-types';

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
        getAuthorsQuery: PropTypes.any,
    }

    displayAuthors(){
        var data = this.props.getAuthorsQuery;
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
            <form className="update-author" onSubmit={ this.submitForm.bind(this) } >
                <div className="update-author__title">Update Author</div>
                <div className="update-author__name">
                    <label className="update-author__label">Author name:</label>
                    <input className="update-author__input" type="text" value={ this.state.name } name='name' onChange={ (e) => this.onChange(e)} />
                </div>
                <div className="update-author__age">
                    <label className="update-author__label">Author age:</label>
                    <input className="update-author__input" type="text" value={ this.state.age } name='age' onChange={ (e) => this.onChange(e)} />
                </div>
                <div className="update-author__select">
                    <label className="update-author__label">Author:</label>
                    <select className="update-author__select" name='id' onChange={ (e) => this.onChange(e)} >
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button className="update-author__button">Update author</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(updateAuthorMutation, { name: 'updateAuthorMutation' })
)(UpdateAuthor);
