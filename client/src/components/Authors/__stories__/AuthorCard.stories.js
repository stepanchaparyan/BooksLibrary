import React from 'react';
import { storiesOf } from '@storybook/react';
import { AuthorCard } from '../AuthorCard';
import { useIntl } from 'react-intl';

const author = {
  age: 38,
  id: "5db0a03d1c9d440000c10b01",
  name: "Stepan",
  photo: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456321.png",
};

const WrapperIntl = () => {
  const { formatMessage } = useIntl();

  return (
      <AuthorCard author={author} formatMessage={formatMessage} />
  );
};


storiesOf('Task', module)
  .add('default', () => <WrapperIntl />)



  
  