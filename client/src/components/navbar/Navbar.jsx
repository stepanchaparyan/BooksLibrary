import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavbarContainer,
         NavbarButtonsContainer,
         NavbarButtons,
         NavbarLogoContainer,
         NavbarLogo }
from './navbarStyled';

class Navbar extends Component {
  static propTypes = {
    navbarData: PropTypes.object
  }

  render () {
    const { navbarData } = this.props;

    const navbarButtons = navbarData.links.map( (link, i) => {
      return  <NavbarButtons key={ i }>
                  <Link to={ link.href }>{ link.title }</Link>
              </NavbarButtons>
    })
    return (
      <NavbarContainer>
          <NavbarLogoContainer href="/">
            <NavbarLogo src={ navbarData.imageSrc } alt="Logo" />
          </NavbarLogoContainer>
          <NavbarButtonsContainer>
            { navbarButtons }
          </NavbarButtonsContainer>
      </NavbarContainer>
    );
  }
}

export { Navbar };