import React, { Component } from 'react';
import { Button, Image } from 'react-components';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static propTypes = {
    navbarData: PropTypes.object
  }

  render () {
    const { navbarData } = this.props;

    const navbarButtons = navbarData.links.map( (link, i) => {
      return <Button href={ link.href } className={ link.className } key={ i }>{ link.title }</Button>
    })
    return (
      <div className="nav-bar">
          <a className='nav-bar__logo-container' href="/">
            <Image className='nav-bar__logo' src={ navbarData.imageSrc } alt="Logo" />
          </a>
          <div className="nav-bar__links-container">
            { navbarButtons }
          </div>
      </div>
    );
  }
}

export { Navbar };