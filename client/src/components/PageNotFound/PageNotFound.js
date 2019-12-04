import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageNotFoundContainer } from './PageNotFoundStyled';
import { injectIntl } from 'react-intl';
import localization from './localization';

class PageNotFound extends Component {
  static propTypes = {
    intl: PropTypes.any,
}

render() {
  const { intl: { formatMessage } } = this.props;
  return (
      <PageNotFoundContainer>
          <h1>{formatMessage(localization.pageNotFound)}</h1>
      </PageNotFoundContainer>
    );
  }
}

export default injectIntl(PageNotFound);