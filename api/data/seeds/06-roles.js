const roles = require('../dummy_data/roles');
exports.seed = function(knex) {
  return knex('roles').insert(roles);
};
