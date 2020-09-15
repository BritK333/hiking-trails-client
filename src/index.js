import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client"
import './App.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    uri: 'https://brit-hiking-app-server.herokuapp.com/',
    cache: new InMemoryCache()
})

ReactDOM.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
