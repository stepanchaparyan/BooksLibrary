import React from 'react';
// import { ThemeProvider } from 'styled-components';
import { addDecorator, configure, setAddon } from '@storybook/react';
// import theme from '../src/styles/theme';
// import chaptersAddon from 'react-storybook-addon-chapters';
import StoryRouter from 'storybook-react-router';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import EN_US from '../src/translations/en.json';
import HY_AM from '../src/translations/hy.json';

const messages = {
  en: EN_US,
  hy: HY_AM,
};

const getMessages = locale => messages[locale];

setIntlConfig({
  locales: ['en', 'hy'],
  defaultLocale: 'en',
  getMessages,
});

addDecorator(withIntl);

addDecorator(StoryRouter());

// setAddon(chaptersAddon);

// addDecorator(s => <ThemeProvider theme={theme}>{s()}</ThemeProvider>);


const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
