import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: 'Bearer ' + process.env.REACT_APP_NOT_SECRET_CODE,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
