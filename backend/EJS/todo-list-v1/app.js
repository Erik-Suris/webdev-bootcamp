const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

var item = ""

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.sendFile(__dirname+'/')
    var today = new Date()
    var options = {
        weekDay: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render("list", {kindOfDay: day, newListItem: item})

})

app.post('/', function(req, res){
    item = req.body.newItem
    res.redirect('/')
})

app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})