
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', dish => {
      dish.increments()
      dish.string('name', 100).unique()
      dish.string('imageUrl').unique()
      dish.string('description', 250).unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
