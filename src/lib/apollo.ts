import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sflnqs1xvi01z56fkka8hl/master',
  cache: new InMemoryCache()
})