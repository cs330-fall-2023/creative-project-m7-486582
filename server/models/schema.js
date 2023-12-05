
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
const levelsSchema = new mongoose.Schema({
    heartIcon: Number,
    fireflies: Number,
    neverendingSpring: Number,
    summerNights: Number,
    mirrorMirror: Number,
    lotusEater: Number,
    coldLeaves: Number,
    friendship: Number,
    desire: Number,
    total: Number
})
const rectangleSchema = new mongoose.Schema({
    top: Number,
    left: Number,
    width: Number,
    height: Number,
    backgroundUrl: String,
    key: String
})
const userPoemSchema = new mongoose.Schema({
    lines: [userLineSchema],
    title: String,
    author: String,
    poemLevels: levelsSchema,
    rectangles: [rectangleSchema],
})

const Poem = mongoose.model('Poem', poemSchema);
const UserPoem = mongoose.model('UserPoem', userPoemSchema);
module.exports = { Poem, UserPoem }