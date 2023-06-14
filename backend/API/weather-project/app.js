const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.post('/', function(req,res) {
    const query = req.body.city
    const apiKey = 'c88bf0687de6a716b8b94a322d51360f'
    const unit = 'metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`

    https.get(url, function(response) {
        response.on('data', function(data){
            const weatherData = JSON.parse(data)
            const temperature = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
            res.write(`<p>The weather is currently ${description}</p>`)
            res.write(`<h3>The temperature in ${query} is ${temperature} degrees Celsius.</h3>`)
            res.write(`<img src='${imgURL}'>`)
            res.send()
        })
    })
})

app.listen(port, function() {
    console.log(`Server is running on port ${port}`)
})