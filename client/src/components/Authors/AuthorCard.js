import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userImage from '../../assets/user.jpeg';
import { Link } from 'react-router-dom';

class AuthorCard extends Component {
    static propTypes = {
        author: PropTypes.any,
    }

    render(){
        const { author } = this.props;
        return(
            <div className="author-card">
                <div className="author-card__image-div">
                    <img className="author-card__image" src={userImage} alt="image"/>
                </div>
                <div className="author-card__body">
                    <div className="author-card__name">Name: {author.name}</div>
                    <div className="author-card__age">Age: {author.age}</div>
                    <div className="author-card__books"><Link to={'/author/' + author.id} >Books list here</Link></div>
                </div>
            </div>
        );
    }
}

export { AuthorCard };