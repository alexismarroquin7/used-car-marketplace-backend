const cars = require('../dummy_data/cars');
exports.seed = function(knex) {
  return knex('cars').insert(cars);
};
