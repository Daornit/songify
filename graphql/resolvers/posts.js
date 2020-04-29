const mongoose = require('mongoose');
//import entities
// const Post = mongoose.model('Post');

//import services
// const {
//   transformPost
// } = require('../services/TransformService');
// const ErrorService = require('../services/ErrorService');
// const PostService = require('../services/PostService');

module.exports = {

  postQueryResolver: {
    // retrieveSinglePost: async(parent, args = {}, context, info) => {
    //   const post = await Post.findOne({url: args.url});
    //   ErrorService.requireEntity(post, 'Post')
    //   await PostService.updateViewCount(post);
    //   return transformPost(post);
    // },
  },

  postMutationResolver: {
    // deletePost: async (parent, args, context, info) => {
    //   try {
    //     await AuthService.requireAuth(context);
    //     let removedPost = await Post.findByIdAndRemove(args.postId).populate('author');
    //     ErrorService.requireEntity(removedPost, "Post");

    //     await PostService.postRemoveAllRelation(removedPost.id);
    //     await PostService.postRemoveFromAuthor(removedPost.author, removedPost);

    //     return removedPost;
    //   } catch (err) {
    //     throw err;
    //   }
    // } 
  }
};