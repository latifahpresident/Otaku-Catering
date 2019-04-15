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



module.exports = {
    getDishes,
    getDishById,
    postNewDish,
}