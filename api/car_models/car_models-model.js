const db = require('../data/db-config');

async function findAll () {
  const rows = await db('car_models as cmd')
  .join('car_makes as cmk', 'cmd.car_make_id', 'cmk.car_make_id')
  .join('car_types as ct', 'cmd.car_type_id', 'ct.car_type_id');

  const carModels = rows.map(row => {
    return {
      id: row.car_model_id,
      name: row.car_model_name,
      description: row.car_model_description,
      created_at: row.car_model_created_at,
      updated_at: row.car_model_updated_at,
      make: {
        id: row.car_make_id,
        name: row.car_make_name,
        description: row.car_make_description,
        created_at: row.car_make_created_at,
        updated_at: row.car_make_updated_at,
      },
      type: {
        id: row.car_type_id,
        name: row.car_type_name,
        description: row.car_type_description,
        created_at: row.car_type_created_at,
        updated_at: row.car_type_updated_at
      }
    }
  })
  return carModels;
}

module.exports = {
  findAll
}