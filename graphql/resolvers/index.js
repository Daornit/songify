const { postQueryResolver, postMutationResolver } = require('./posts');

const rootResolver = {
  Query: {
    ...postQueryResolver,
  },
  // Mutation: {
  //   ...postMutationResolver,
  // }
}

module.exports = rootResolver;
