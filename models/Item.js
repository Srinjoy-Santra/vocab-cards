const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    _id: String,
    word: {
        type: String,
        required: true,
        unique: true
    },
    grammar: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    sentence: String,
    mnemonic: String,
    imageUrl: String,
});

module.exports = Item = mongoose.model('item', ItemSchema);  