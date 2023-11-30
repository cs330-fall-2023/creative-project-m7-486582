const express = require('express')
const Poem = require('./models/schema')
const app = express()
const port = 3001
const cors = require('cors')
console.log(port)
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cedney:Malachi97@cluster0.ibsy3ti.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(cors({ origin: "http://localhost:3000", methods: ['GET', 'POST'], credentials: false }))

app.get('/api/poems', async (req, res) => {
    try {
        const poems = await Poem.find()
        res.json(poems)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
})