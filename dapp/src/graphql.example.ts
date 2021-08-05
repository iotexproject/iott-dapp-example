import _ from 'lodash';
import { ApolloClient, HttpLink, DefaultOptions, InMemoryCache } from '@apollo/client/core';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';
 
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

async function main() {
    const client = new ApolloClient({
        link: new HttpLink({
            fetch,
            uri: 'http://34.146.117.200:8000/subgraphs/name/iotex/pebble-subgraph',
        }),
        cache: new InMemoryCache(),
        defaultOptions
    });

    const data = await client.query({
        query: gql`
            query app {
                applications {
                    id
                    version
                    uri
                    avatar
                }
            }
        `,
    });

    console.log(_.get(data, 'data.applications'));
}

main();