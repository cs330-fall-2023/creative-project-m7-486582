const express = require('express')
const { Poem, UserPoem } = require('./models/schema')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cedney:Malachi97@cluster0.ibsy3ti.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(cors({ origin: "http://localhost:3000", methods: ['GET', 'POST'], credentials: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/poems', async (req, res) => {
    try {
        const poems = await UserPoem.find()
        res.json(poems)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
})

app.post('/api/save', async (req, res) => {
    try {
        console.log(req.body)
        const userPoem = new UserPoem(req.body)
        console.log(userPoem)
        await userPoem.save()
        res.json(userPoem)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
})