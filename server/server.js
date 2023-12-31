const express = require('express')
const { UserPoem, User } = require('./models/schema')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
mongoose.connect('mongodb+srv://cedney:Malachi97@cluster0.ibsy3ti.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(cors({ origin: "http://localhost:3000", methods: ['GET', 'POST'], credentials: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/poems', async (req, res) => {
    try {
        if (req.body.poemIds) {
            const poemIds = req.body.poemIds
            const poems = await UserPoem.find({ _id: { $in: poemIds } })
            res.json(poems)
        } else {
            const poems = await UserPoem.find()
            res.json(poems)
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
})

app.post('/api/save', async (req, res) => {
    try {
        const userPoem = new UserPoem(req.body)
        await userPoem.save()
        if (req.body.uid) {
            console.log(req.body.uid)
            const _id = req.body.uid
            const user = await User.find({ _id: _id })
            user[0].poemIds.push(userPoem._id)
            await user[0].save()
        }
        res.json(userPoem)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
})

app.get('/api/poem', async (req, res) => {
    try {
        const _id = req.query.id
        const response = await UserPoem.find({ _id: _id })
        res.json(response)
    } catch (err) {
        console.error(err)
    }
})

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.find({ username: username })
        if (user.length === 0) {
            res.json({
                ok: false,
                statusText: 'Invalid username or password'
            })
        }
        const passCheck = user[0].hashPassword
        if (bcryptjs.compare(password, passCheck)) {
            res.json({
                ok: true,
                user: user
            })
        } else {
            res.json({
                ok: false,
                statusText: 'Invalid username or password'
            })
        }
    } catch (err) {
        console.error(err)
    }
})

app.post('/api/signup', async (req, res) => {
    try {
        const { username, password } = req.body
        const hash = await bcryptjs.hash(password, 10)
        const checkUser = await User.find({ username: username })
        if (checkUser.length > 0) {
            res.json({
                ok: false,
                statusText: 'Username already exists'
            })
        } else {
            const user = new User({
                username: username,
                password: hash
            })
            await user.save()
            res.json({
                ok: true,
                user: user
            })
        }
    } catch (error) {
        console.error(error)
    }
})

app.post('/api/user', async (req, res) => {
    try {
        const _id = req.body.uid
        const checkUser = await User.find({ _id: _id })
        if (checkUser.length > 0) {
            res.json({
                ok: true,
                user: checkUser[0]
            })
        } else {
            res.json({
                ok: false,
                statusText: 'User not found'
            })
        }
    } catch (err) {
        console.error(err)
    }
})