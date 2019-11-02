import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory as history} from 'history';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './settings/apolloClientSettings';
import './styles.scss';

class App extends Component {
  render() {
    return (
        <ApolloProvider client={apolloClient}>
            <BrowserRouter history={history}>
                <Routes />
            </BrowserRouter>
        </ApolloProvider>
    );
  }
}

export default App;