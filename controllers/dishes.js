const dish = require('../models /dish');

exports.getDishes = async (req, res) => {
    try {
        const dishData = await dish.getDishes()
        if(!dishData) {
            res.status(404).json(`No dishes available at this time`)
        } else {
            res.status(200).json({dishData})
        }
    } catch (err) {
        res.status(500)
        console.log(err)
    }
};

exports.getDishById = async (req, res) => {
    try {
        const { id }  = req.params;
        const dishData = await dish.getDishById(id)
        if (!dishData) {
            res.status(400).json(`There was a problem retrieving the dish`)
        } else {
            res.status(200).json(dishData)
        }
    } catch (err) {
        res.status(500).console.log(err)
    }
};

exports.postADish = async (req, res) => {
    try {
        const aNewDish = req.body;
        const { name, imageUrl, ingredients, description } = req.body;
       
        if (!name || !imageUrl || !ingredients || ! description) {
            res.status(400).json(`Please eneter all required fields`)
        } else {
            const newDish = await dish.postNewDish(aNewDish)
            res.status(201).json(`New dish added`)
        }
    } catch (err) {
        res.status(500).json(`Error posting dish`)
        console.log(err)
    }
};