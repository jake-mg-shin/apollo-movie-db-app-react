import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import client from './apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import './components/Root.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
