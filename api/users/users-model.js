const db = require('../data/db-config');

const findByEmail = async (email) => {
  const row = await db('users as u')
  .join('roles as r', 'r.role_id', 'u.role_id')
  .where({
    'u.user_email': email
  })
  .first();
  
  if(!row) return null;

  const user = {
    
    id: row.user_id,
    username: row.user_username,
    email: row.user_email,
    email_confirmed: row.user_email_confirmed === 0 ? false : true,
    first_name: row.user_first_name,
    last_name: row.user_last_name,
    password: row.user_password,
    created_at: row.user_created_at,
    updated_at: row.user_updated_at,

    role: {
      id: row.role_id,
      name: row.role_name,
      created_at: row.role_created_at,
      updated_at: row.role_updated_at
    }
  }

  return user;
}

module.exports = {
  findByEmail
}