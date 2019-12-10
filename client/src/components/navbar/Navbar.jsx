import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavbarContainer,
         NavbarButtonsContainer,
         NavbarButtons,
         NavbarLogoContainer,
         NavbarLogo }
from './navbarStyled';
import { injectIntl } from 'react-intl';

const Navbar = ({navbarLinks, navbarLogo, intl: { formatMessage }}) => {
  const navbarButtons = navbarLinks.map( (link) => {
    return  <NavbarButtons key={ link.href }>
                <Link to={ link.href }>{formatMessage(link.intlMessage.title) }</Link>
            </NavbarButtons>
  })

  return (
    <NavbarContainer>
        <NavbarLogoContainer >
          <NavbarLogo src={ navbarLogo } alt="Logo" />
        </NavbarLogoContainer>
        <NavbarButtonsContainer>
          { navbarButtons }
        </NavbarButtonsContainer>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  navbarLinks: PropTypes.array,
  navbarLogo: PropTypes.string,
  intl: PropTypes.any,
}

export default injectIntl(Navbar);