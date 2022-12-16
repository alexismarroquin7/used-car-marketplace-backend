const db = require('../data/db-config');

function formatPost (row) {
  return {
    id: row.post_id,
    city: row.post_city,
    state: row.post_state,
    description: row.post_description,
    milage: row.post_milage,
    transmission_type: row.post_transmission_type,
    exterior_color: row.post_exterior_color,
    interior_color: row.post_interior_color,
    fuel_type: row.post_fuel_type,
    price: row.post_price,
    created_at: row.post_created_at,
    updated_at: row.post_updated_at,

    user: {
      id: row.user_id,
      username: row.user_username,
      email: row.user_email,
      email_confirmed: row.user_email_confirmed,
      first_name: row.user_first_name,
      last_name: row.user_last_name,
      password: row.user_password,
      created_at: row.user_created_at,
      updated_at: row.user_updated_at,
      role: {
        id: row.role_id,
        name: row.role_name,
        created_at: row.role_created_at,
        updated_at: row.role_updated_at,
      }
    },

    car: {
      id: row.car_id,
      year: row.car_year,
      created_at: row.car_created_at,
      updated_at: row.car_updated_at,
      
      model: {
        id: row.car_model_id,
        name: row.car_model_name,
        description: row.car_model_description,
        created_at: row.car_model_created_at,
        updated_at: row.car_model_updated_at,
      },
      
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
        updated_at: row.car_type_updated_at,
      }
    
    }
    
  }
}

async function findAll () {
  const rows = await db('posts as p')
  .join('users as u', 'p.user_id', 'u.user_id')
  .join('roles as r', 'r.role_id', 'u.role_id')
  .join('cars as c', 'c.car_id', 'p.car_id')
  .join('car_models as c_model', 'c_model.car_model_id', 'c.car_model_id')
  .join('car_makes as c_make', 'c_make.car_make_id', 'c_model.car_make_id')
  .join('car_types as c_type', 'c_type.car_type_id', 'c_model.car_type_id')
  .orderBy('p.post_id', 'asc')

  const posts = rows.map(row => {
    return formatPost(row); 
  });

  return posts;
}

module.exports = {
  findAll
}