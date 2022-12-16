exports.up = async (knex) => {
  await knex.schema
    .createTable('car_types', (car_types) => {
      car_types.increments('car_type_id');
      car_types.string('car_type_name').unique().notNullable();
      car_types.string('car_type_description');
      car_types.timestamp('car_type_created_at').defaultTo(knex.fn.now());
      car_types.timestamp('car_type_updated_at').defaultTo(knex.fn.now());
    })
    .createTable('car_makes', (car_makes) => {
      car_makes.increments('car_make_id');
      car_makes.string('car_make_name').unique().notNullable();
      car_makes.string('car_make_description');
      car_makes.timestamp('car_make_created_at').defaultTo(knex.fn.now());
      car_makes.timestamp('car_make_updated_at').defaultTo(knex.fn.now());
    })
    .createTable('car_models', (car_models) => {
      car_models.increments('car_model_id');
      car_models.string('car_model_name').notNullable();
      car_models.string('car_model_description');
      car_models.timestamp('car_model_created_at').defaultTo(knex.fn.now());
      car_models.timestamp('car_model_updated_at').defaultTo(knex.fn.now());
      car_models.integer('car_make_id')
      .unsigned()
      .notNullable()
      .references('car_make_id')
      .inTable('car_makes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      car_models.integer('car_type_id')
      .unsigned()
      .notNullable()
      .references('car_type_id')
      .inTable('car_types')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
    })
    .createTable('cars', (cars) => {
      cars.increments('car_id');
      cars.integer('car_year').notNullable();
      cars.integer('car_model_id')
      .unsigned()
      .notNullable()
      .references('car_model_id')
      .inTable('car_models')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      cars.timestamp('car_created_at').defaultTo(knex.fn.now());
      cars.timestamp('car_updated_at').defaultTo(knex.fn.now());
    })
    .createTable('roles', (roles) => {
      roles.increments('role_id');
      roles.string('role_name').notNullable().unique();
      roles.timestamp('role_created_at').defaultTo(knex.fn.now());
      roles.timestamp('role_updated_at').defaultTo(knex.fn.now());
    })
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('user_username');
      users.string('user_email').notNullable().unique();
      users.integer('user_email_confirmed').notNullable();
      users.string('user_first_name');
      users.string('user_last_name');
      users.string('user_password');
      users.integer('role_id')
      .unsigned()
      .notNullable()
      .references('role_id')
      .inTable('roles')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      users.timestamp('user_created_at').defaultTo(knex.fn.now());
      users.timestamp('user_updated_at').defaultTo(knex.fn.now());
    })
    .createTable('posts', posts => {
      posts.increments('post_id');
      
      posts.string('post_city').notNullable();
      
      posts.string('post_state').notNullable();

      posts.string('post_description', 240);

      posts.integer('post_milage').notNullable();
      
      posts.string('post_transmission_type').notNullable();
      
      posts.string('post_exterior_color').notNullable();
      
      posts.string('post_interior_color').notNullable();
      
      posts.string('post_fuel_type').notNullable();
      
      posts.integer('post_price').notNullable();

      posts.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')

      posts.integer('car_id')
      .unsigned()
      .notNullable()
      .references('car_id')
      .inTable('cars')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')

      posts.timestamp('post_created_at').defaultTo(knex.fn.now());
      posts.timestamp('post_updated_at').defaultTo(knex.fn.now());
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('posts')
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('roles')
  await knex.schema.dropTableIfExists('cars')
  await knex.schema.dropTableIfExists('car_models')
  await knex.schema.dropTableIfExists('car_makes')
  await knex.schema.dropTableIfExists('car_types')
}
