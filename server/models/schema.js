
const mongoose = require('mongoose')

const poemSchema = new mongoose.Schema({
    title: String,
    author: String
})
const lineSchema = new mongoose.Schema({
    text: String,
    isTitle: Boolean,
    isLink: Boolean,
    isNewStanza: Boolean,
    isFirstLine: Boolean,
    isLastInStanza: Boolean
})
const userLineSchema = new mongoose.Schema({
    line: lineSchema,
    textColor: String
})
const userPoemSchema = new mongoose.Schema({
    lines: [userLineSchema],
    title: String,
    author: String
})

const Poem = mongoose.model('Poem', poemSchema);
const UserPoem = mongoose.model('UserPoem', userPoemSchema);
module.exports = { Poem, UserPoem }