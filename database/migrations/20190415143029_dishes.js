
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', dish => {
      dish.increments()
      dish.string('name').unique().notNullable()
      dish.string('imageUrl').unique().notNullable()
      dish.string('ingredients').notNullable()
      dish.string('description', 250).unique().notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
