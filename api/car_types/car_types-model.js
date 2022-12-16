const db = require('../data/db-config');

async function findAll () {
  const rows = await db('car_types as ct')

  const carTypes = rows.map(row => {
    return {
      id: row.car_type_id,
      name: row.car_type_name,
      description: row.car_type_description,
      created_at: row.car_type_created_at,
      updated_at: row.car_type_updated_at
    }
  })
  return carTypes;
}

module.exports = {
  findAll
}