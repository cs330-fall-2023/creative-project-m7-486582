
const mongoose = require('mongoose')

const poemSchema = new mongoose.Schema({
    title: String,
    author: String
})

const Poem = mongoose.model('Poem', poemSchema);
module.exports = Poem