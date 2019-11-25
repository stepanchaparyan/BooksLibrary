import React, { Component } from 'react';
import { PageNotFoundContainer } from './PageNotFoundStyled';
import M from '../../Messages';

class PageNotFound extends Component {
  render() {
    return (
        <PageNotFoundContainer>
            <h1>{M.get('pageNotFound')}</h1>
        </PageNotFoundContainer>
    );
  }
}

export { PageNotFound };