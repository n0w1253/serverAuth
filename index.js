// main starting point of the application

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')  //middleware
const morgan = require('morgan') //middleware
const app = express()
const router = require('./router')
const mongoose = require('mongoose')

// DB setup
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/auth',{
    useMongoClient: true
    /* other options */
})

// App Setup
app.use(morgan('combined'))  //morgan is a logging framework
app.use(bodyParser.json({ type: '*/*' })) //body-parse parses incoming request
router(app)


// Server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:',port);