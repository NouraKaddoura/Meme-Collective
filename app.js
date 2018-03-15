const
    express = require('express')
    app = express()
    logger = require('morgan')
    bodyParser = require('body-parser')
    ejsLayouts = require('express-ejs-layouts')
    axios = require('axios')
    dotenv = require('dotenv')
    mongoose = require('mongoose')
    User = require('./models/User.js')
    usersRouter = require('./routes/users.js')
    PORT = 3000

mongoose.connect('mongodb://localhost/Project-Navigator', (err) => {
    console.log(err||"Connected to MongoDB")
})

app.set('views', `${__dirname}/views`)
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use('/users', usersRouter)
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(ejsLayouts)
// app.get('/users/show/:id', (req, res) => {
//     User.findById(req.params.id, (err, thatUser) => {
//         res.send('users show')
//     })
// })

app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}`)
})