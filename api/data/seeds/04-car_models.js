const car_models = require('../dummy_data/car_models');
exports.seed = function(knex) {
  return knex('car_models').insert(car_models);
};
