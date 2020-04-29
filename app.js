const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

// const { isAuth } = require('./middleware');

require('dotenv').config();

// Before app starts all models loading
require('./models/album');
require('./models/artist');
require('./models/genre');
require('./models/language');
require('./models/lyrics');
require('./models/song');
require('./models/track');

const graphQlSchema = require('./graphql/schema');
const graphQlResolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  // context: async ({ req }) => {
  //   if(!req.isAuth) {
  //     return { user: {}, isAuth: req.isAuth };
  //   }
  //   return { user: { ...req.user }, isAuth: req.isAuth };
  // },
  typeDefs: graphQlSchema, 
  resolvers: graphQlResolvers 
});

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
  }
  next();
});

// app.use(isAuth);
const path = '/';

server.applyMiddleware({ app, path });

mongoose.connect(process.env.DATABASE_URL).then(() => {
  app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4500${server.graphqlPath}`)
  );
}).catch(err => {
  throw err;
})
