import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAuthorsQuery } from '../../queries/queries';

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
            <form className="add-author" onSubmit={ this.submitForm.bind(this) } >
                <div className="add-author__title">Add Author</div>
                <div className="add-author__name">
                    <label className="add-author__label">Author name:</label>
                    <input className="add-author__input" type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="add-author__age">
                    <label className="add-author__label">Author age:</label>
                    <input className="add-author__input" type="text" onChange={ (e) => this.setState({ age: e.target.value }) } />
                </div>
                <button className="add-author__button">Add author</button>
            </form>
        );
    }
}

export default AddAuthor;
