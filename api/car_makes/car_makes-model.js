const db = require('../data/db-config');

async function findAll () {
  const rows = await db('car_makes as cmk')

  const carModels = rows.map(row => {
    return {
      id: row.car_make_id,
      name: row.car_make_name,
      description: row.car_make_description,
      created_at: row.car_make_created_at,
      updated_at: row.car_make_updated_at
    }
  })
  return carModels;
}

module.exports = {
  findAll
}