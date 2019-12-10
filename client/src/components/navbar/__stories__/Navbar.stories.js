import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from '../Navbar';
import { useIntl } from 'react-intl';

export const navbarMockLinks = 
[
  { 
    intlMessage: { 
      title: {
        defaultMessage: "Authors",
        id: "navbar.authors.title"
      }
    }, 
    href: '/' },
  { 
    intlMessage: { 
      title: {
        defaultMessage: "Books",
        id: "navbar.books.title"
      }
    },     
    href: '/books' 
  },
]

const navbarLogo = '../assets/logo.png';

const NavbarWrapperIntl = () => {
  const { formatMessage } = useIntl();

  return (
      <Navbar navbarLinks={navbarMockLinks} navbarLogo={navbarLogo} formatMessage={formatMessage}/>
  );
};


storiesOf('Navbar', module)
  .add('default', () => <NavbarWrapperIntl />)
