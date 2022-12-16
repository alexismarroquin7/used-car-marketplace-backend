const car_makes = require('../dummy_data/car_makes');
exports.seed = function(knex) {
  return knex('car_makes').insert(car_makes);
};
