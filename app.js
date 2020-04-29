const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

// Initialize process.env
require('dotenv').config();

// Before app starts all models loading
require('./models/album');
require('./models/artist');
require('./models/genre');
require('./models/language');
require('./models/lyrics');
require('./models/song');
require('./models/track');

// Grapql schema, resolver initialize
const graphQlSchema = require('./graphql/schema');
const graphQlResolvers = require('./graphql/resolvers');

// Create new apollo server
const server = new ApolloServer({
  typeDefs: graphQlSchema, 
  resolvers: graphQlResolvers 
});

const app = express();

const path = '/';

server.applyMiddleware({ app, path });

mongoose.connect(process.env.DATABASE_URL).then(() => {
  app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4500${server.graphqlPath}`)
  );
}).catch(err => {
  throw err;
})
