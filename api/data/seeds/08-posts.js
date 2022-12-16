const posts = require('../dummy_data/posts');
exports.seed = function(knex) {
  return knex('posts').insert(posts);
};
