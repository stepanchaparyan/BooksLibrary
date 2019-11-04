import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './settings/apolloClientSettings';
import { Navbar } from './components/Navbar';
import { navbarData } from './resources/navbarData';
import { ImageCarousel } from './components/ImageCarousel';
import { images } from './resources/imagesCarouselData';
import Routes from './routes';
import './styles.scss';

class App extends Component {
  render() {
    return (
        <ApolloProvider client={ apolloClient }>
            <BrowserRouter history={ history }>
                <Navbar navbarData={ navbarData }/>
                <ImageCarousel images={ images }/>
                <Routes />
            </BrowserRouter>
        </ApolloProvider>
    );
  }
}

export { App };