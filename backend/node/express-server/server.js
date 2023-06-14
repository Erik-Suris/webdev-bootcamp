//jshint esversion:6

const express = require('express')

const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('<h2>Hello World!</h2>')
})

app.get('/contact', function(req, res) {
  res.send('<p>Contact me at: gmail@gmail.com</p>')
})

app.get('/about', function(req, res) {
  res.send("<p>I'm a person who do something anywhere.</p>")
})

app.listen(port, function() {
  console.log(`Server started on port ${port}`)
})