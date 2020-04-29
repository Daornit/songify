const { gql } = require('apollo-server-express');

module.exports = gql`
  type Song {
    _id: ID!
  }

  type Query {
    songs: [Song!]!
  }

  # type Mutation {
   
  # }
`;
