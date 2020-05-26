const express = require('express');
const router = express.Router();

// item model
const Item = require('../../models/Item');

/*
    @route  GET api/items
    @desc   Get all items
    @access Public
*/
router.get('/', (req, res) => {
    Item.find()  
        .then(items => res.json(items))
});

/*
    @route  POST api/items
    @desc   create an item
    @access Public
*/
router.post('/', (req, res) => {
    console.log(req.body);
    const { word, grammar, meaning } = req.body;
    const newItem = new Item({
        _id: word,
        word,
        grammar,
        meaning 
    });

    newItem.save().then(item => res.json(item));
});

/*
    @route  put api/items
    @desc   update an item
    @access Public
*/
router.put('/', (req, res) => {
    console.log(req.body);
    const { word, grammar, meaning } = req.body;
    const newItem = new Item({
        word,
        grammar,
        meaning 
    });

    newItem.save().then(item => res.json(item));
});

/*
    @route  DELETE api/items
    @desc   delete an item
    @access Public
*/
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({
                success: true
            })))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;