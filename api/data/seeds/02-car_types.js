const car_types = require('../dummy_data/car_types');
exports.seed = function(knex) {
  return knex('car_types').insert(car_types);
};
