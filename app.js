const express = require('express')
const app = express()
const ejslayout = require('express-ejs-layouts')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
require('dotenv').config()
const http = require("http");
const cors = require('cors')


app.use(cors())

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// session setup
app.use(session({ secret: process.env.APPSKU, saveUninitialized: true, resave: true, name: process.env.APPSKU }));

// public path set
app.use(express.static('public'));

// ejs setup
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(ejslayout)

// Ensure layout file exists
app.set('layout', 'layout') // This line sets the default layout file to 'layout.ejs'

// routes setup
require('./routes/web')(app);
require('./routes/website')(app);


let server = http.createServer(app);

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
