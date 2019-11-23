import React, { Component } from 'react';
import { PageNotFoundContainer } from './PageNotFoundStyled';

class PageNotFound extends Component {
  render() {
    return (
        <PageNotFoundContainer>
            <h1>Page Not Found</h1>
        </PageNotFoundContainer>
    );
  }
}

export { PageNotFound };