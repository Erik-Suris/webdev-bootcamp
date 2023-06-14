const https = require('https')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/', function(req,res){
    res.sendFile(__dirname+'/signup.html')
})

app.post('/', function(req,res){
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var password = req.body.password
    console.log(firstName,lastName,email,password)
})

app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})