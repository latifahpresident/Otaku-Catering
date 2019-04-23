const dish = require('../models /dish');
const path = require('path');
const multer = require('multer');
const db = require('../database/dbConfig');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/jpeg'
        ) {
            cb(null, true)
    } else {
        cd(null, false)
    }
}
exports.upload = multer({
   
        storage: fileStorage, 
        fileFilter: fileFilter
    })
        .single('imageUrl')


exports.getDishes = async (req, res) => {
    try {
        const dishData = await dish.getDishes()

        if(!dishData) {
            res.status(404).json(`No dishes available at this time`)
        } else {
            res.status(200).json({
                dishData
            })
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

exports.postADish = async  ( req, res,) => {
    console.log(req.file, 'in req.file')
    
    try {
        const { name,  description } = req.body;
        const imageUrl = req.file.path
        console.log(imageUrl)
        
            const newDish = await dish.postNewDish({name, description, imageUrl})
            res.status(201).json({
                msg: 'A new dish added',
                imageUrl: req.file.filename})
        
    } catch (err) {
        res.status(500).json(`Error posting dish`)
        console.log(err)
    }
};

exports.editDish = async (req, res, next) => {    
    try {
        const { id } = req.params;
        const {name, description} = req.body;
        const imageUrl = req.file.path
        console.log(imageUrl)
        const dishData = await dish.editADish({id, name, description, imageUrl})
        // const dishData = await db('dishes').where({id}).update(dishes)
        console.log(dishData)
        res.status(200).json({
            msg: 'Dish updated',
            imageUrl: req.file.filename
            })
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
};

exports.deleteADish = async (req, res, next) => {
    const { id } = req.params;
    try {
        const dishData = await dish.deleteDish(req.params.id)
        if (dishData) {
            res.status(204).json({msg: `A dish was deleted`})
        } else {
            res.status(404).json({message: `There was an error, dish not deleted`})
        }
    } catch (err) {
        res.status(500).json(`That dish does not exist`)
        console.log(err)
    }
};