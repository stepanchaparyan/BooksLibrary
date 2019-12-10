import React from 'react';
import PropTypes from 'prop-types';
import { PageNotFoundContainer } from './PageNotFoundStyled';
import { injectIntl } from 'react-intl';
import localization from './localization';

const PageNotFound = ({ intl: { formatMessage } }) => {
  return (
    <PageNotFoundContainer>
        <h1>{formatMessage(localization.pageNotFound)}</h1>
    </PageNotFoundContainer>
  );
}

PageNotFound.propTypes = {
    intl: PropTypes.any,
}

export default injectIntl(PageNotFound);