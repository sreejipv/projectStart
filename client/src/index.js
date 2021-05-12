import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
} from "@apollo/client";

import { createUploadLink } from 'apollo-upload-client'

import { setContext } from '@apollo/client/link/context';

import { onError } from "@apollo/client/link/error";


const httpLink = createUploadLink({
  uri: 'https://radiant-harbor-07728.herokuapp.com/graphql', // Apollo Server is served from port 4000
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');   
  // console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    // console.log('bullshit')
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
  if(networkError){
    console.log('goto error page');
    console.log(networkError);
  }
});

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',// or your graphql server uri
//   cache: new InMemoryCache()

// });

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache()
});




ReactDOM.render(
  <React.StrictMode>
       <ApolloProvider client={client}>
        <App />

       </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
