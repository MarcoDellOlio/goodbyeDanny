require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())






app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT)
})