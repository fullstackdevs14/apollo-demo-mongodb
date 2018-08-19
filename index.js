const { ApolloServer, gql } = require('apollo-server');
var mongoose = require('mongoose');
var resolvers = require('./resolvers');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    firstname: String
    lastname: String
    email: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    hello: String
    books: [Book],
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    signup(email: String!, password: String!, firstname: String!, lastname: String!): AuthPayload
  }
`;

mongoose.connect('mongodb://localhost/test');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
