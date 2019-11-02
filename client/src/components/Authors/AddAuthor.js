import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addAuthorMutation } from '../../queries/queries';
import PropTypes from 'prop-types';

class AddAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: ''
        };
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
            <form id="add-book" onSubmit={ this.submitForm.bind(this) } >
                <h2>Add Author</h2>
                <div className="field">
                    <label>Author name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Author age:</label>
                    <input type="text" onChange={ (e) => this.setState({ age: e.target.value }) } />
                </div>
                <button id="plusBtn">Add author</button>
            </form>
        );
    }
}

AddAuthor.propTypes = {
    addAuthorMutation: PropTypes.any
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(addAuthorMutation, { name: 'addAuthorMutation' })
)(AddAuthor);
