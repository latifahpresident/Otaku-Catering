const db = require('../database/dbConfig');

getDishes = () => {
    return db('dishes')
};

getDishById = (id) => {
    return db('dishes').where({ id })
};

postNewDish = (dish) => {
    return db('dishes').insert(dish)
};

editADish = (id, dish) => {
    return db('dishes').where('id', id ).update(dish)
};

deleteDish = (id) => {
    return db('dishes').where({ id }).del()
};


module.exports = {
    getDishes,
    getDishById,
    postNewDish,
    editADish,
    deleteDish,
}