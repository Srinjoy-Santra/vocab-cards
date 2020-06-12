const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    _id: String,
    word: {
        type: String,
        required: true
    },
    grammar: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    mnemonic: String,
    img_url: String,
    category: String,
    difficulty: String,
    cartoon: String,
    synonyms: [String],
    antonyms: [String],
    movie_links: [{
        name: String,
        link: String
    }],
    tv_links: [{
        name: String,
        link: String
    }],
    sentence: String,
});

module.exports = Item = mongoose.model('item', ItemSchema);  