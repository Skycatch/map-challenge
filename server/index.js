'use strict'

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

const categoryRoutes = require('./routes/categories')
const locationRoutes = require('./routes/locations')

// Initialize DB
const { initDB } = require('./db')
initDB()

app.listen(port)

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

app.use('/categories', categoryRoutes)
app.use('/locations', locationRoutes)

console.log('RESTful API server started on: ' + port)