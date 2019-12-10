import React from 'react';
import { storiesOf } from '@storybook/react';
import { AuthorCard } from '../AuthorCard';
import { useIntl } from 'react-intl';

const authorDefault = {
  age: 38,
  id: "5db0a03d1c9d440000c10b01",
  name: "Stepan1",
  photo: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456321.png",
};

const authorWithoutImage = {
  age: 55,
  id: "5db0a03d1c9d440000c10b01",
  name: "Stepan2",
};

const AuthorCardWrapperIntlDefault = () => {
  const { formatMessage } = useIntl();

  return (
      <AuthorCard author={authorDefault} formatMessage={formatMessage} />
  );
};

const AuthorCardWrapperIntlWithoutImage = () => {
  const { formatMessage } = useIntl();

  return (
      <AuthorCard author={authorWithoutImage} formatMessage={formatMessage} />
  );
};


storiesOf('AuthorCard', module)
  .add('with image from prop', () => <AuthorCardWrapperIntlDefault />)
  .add('with image from default', () => <AuthorCardWrapperIntlWithoutImage />)
