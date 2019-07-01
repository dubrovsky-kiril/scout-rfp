import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { RestLink } from "apollo-link-rest";
import App from "#components/App/App.container";

const restLink = new RestLink({
  uri: process.env.NODE_WEB_API_URL
});

const client = new ApolloClient({
  link: ApolloLink.from([
    restLink,
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    })
  ]),
  cache: new InMemoryCache()
});

const render = Component => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept(() => render(App));
}
