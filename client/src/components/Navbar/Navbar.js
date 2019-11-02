import React, { Component } from 'react';
// import SignedInLinks from './signedInLinks';
// import SignedOutLinks from './signedOutLinks';
// import firebase from '../../config/fbConfig';
// import { Image } from 'react-components';
// import logo from '../../assets/logo.png';
import '../../stylesheets/navbar.scss';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Navbar extends Component {
//   signOut = () => {
//       firebase.auth().signOut();
//   }
  render () {
    // const { auth, profile } = this.props;
    // const links = auth.uid ? <SignedInLinks auth={auth} profile={profile} signOut={this.signOut} /> : <SignedOutLinks />;
    return (
      <div className="navbar1">
        <div className="nav1">
          <Link to="/">Authors</Link>
          <Link to="/books">Books</Link>
        </div>
      </div>
    );
  }
}

// Navbar.propTypes = {
  // addAuthorMutation: PropTypes.any
// }

export default (Navbar);