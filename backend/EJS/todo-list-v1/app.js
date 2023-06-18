const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

let items = ["Buy Food", "Cook Food", "Eat food"]
let workItems = []

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.sendFile(__dirname+'/')
    let today = new Date()
    let options = {
        weekDay: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options)

    res.render('list', {listTitle: day, newListItems: items})

})

app.get('/work', function(req, res) {
    res.render('list', {listTitle: 'Work List', newListItems: workItems})
})

app.post('/', function(req, res){
    let item = req.body.newItem
    if (req.body.list === 'Work') {
        workItems.push(item)
        res.redirect('/work')
    } else {
        items.push(item)
        res.redirect('/')
    }
})

app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})