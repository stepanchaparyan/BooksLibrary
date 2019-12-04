import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './settings/apolloClientSettings';
import { Navbar } from './components/navbar/Navbar';
import { navbarData } from './resources/navbarData';
import { ImageCarousel } from './components/ImageCarousel/ImageCarousel';
import { images } from './resources/imagesCarouselData';
import Routes from './routes';
import { IntlProvider } from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

import messages_hy from "./translations/hy.json";
import messages_en from "./translations/en.json";

const messages = {
    'hy': messages_hy,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

class App extends Component {
  render() {
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <ApolloProvider client={ apolloClient }>
            <BrowserRouter history={ history }>
                <Navbar navbarData={ navbarData }/>
                <ImageCarousel images={ images }/>
                <Routes />
            </BrowserRouter>
        </ApolloProvider>
      </IntlProvider>
    );
  }
}

export { App };