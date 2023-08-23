const express = require('express')
const ErrorHandler = require('./middleware/ErrorHandler')
const connectDB = require('./config/dbConnection')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000


connectDB()
app.use(express.json())
app.use('/api/products', require('./routes/Product'))
app.use(ErrorHandler)

app.listen(port, () => {
  console.log('I am running at', port)
})