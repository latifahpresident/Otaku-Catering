
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'curry', imageUrl: 'image', ingredients: 'peppers and shit', description: 'some something blah blah blah'},
        {id: 2, name: 'curry chicken', imageUrl: 'image again', ingredients: 'peppers ', description: 's blah blah blah'},
        {id: 3, name: 'curry veggies', imageUrl: 'image another one', ingredients: 'and shit', description: 'some something '},
        {id: 4, name: 'curry goat', imageUrl: 'image blah', ingredients: 'food stuff', description: ' blah'},
        {id: 5, name: 'curry rice', imageUrl: 'image something', ingredients: 'oh yeah curry duh', description: 'food blah blah blah'},

      ]);
    });
};
