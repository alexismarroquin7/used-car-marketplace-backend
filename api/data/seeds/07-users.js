const users = require('../dummy_data/users');
exports.seed = function(knex) {
  return knex('users').insert(users);
};
