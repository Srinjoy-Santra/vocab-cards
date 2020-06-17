const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// item model
const Item = require('../../models/Item');

/*
    @route  GET api/items
    @desc   Get all items
    @access Public
*/
router.get('/', (req, res) => {
    let { start, range, onlyWord } = req.query;
    Item.find()  
        .then(items => {

            if(start && range){
                start = parseInt(start)
                range = parseInt(range)
                items = items.slice(start, start + range)
            }

            if(onlyWord === 'true')
                items = items.map(item => item.word)
                    
            return res.json(items)
        })
        .catch(err => res.status(500).send("There was a problem finding the items.", err))

});

/*
    @route  GET api/items/:id
    @desc   Get an item based on id
    @access Public
*/
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(500).send(`There was a problem finding the item with ${req.params.id}.`, err))

});

/*
    @route  POST api/items
    @desc   create an item
    @access Private
*/
router.post('/', auth, (req, res) => {
    console.log(req.body);
    const { word, grammar, meaning } = req.body;
    const newItem = new Item({
        _id: word,
        word,
        grammar,
        meaning 
    });

    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.status(500).send("There was a problem finding the items.", err))
});

/*
    @route  put api/items
    @desc   update an item
    @access Public
*/
router.put('/:id', auth, async (req, res) => {
    
    const { word, grammar, meaning } = req.body;
    Item.findByIdAndUpdate(req.params.id, {
        word,
        grammar,
        meaning
    }, {new: true})
    .then(item => {
        if(!item){
            return res.status(404).send({
                message: `The word ${req.params.id} not found. Try creating!`
            })
        }
        res.send(item)
    }).catch(err => res.status(404).send({message: err.message}))
});

/*
    @route  DELETE api/items
    @desc   delete an item
    @access Public
*/
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({
                success: true
            })))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;