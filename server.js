const dotenv = require('dotenv')
dotenv.config()

const express = require("express")

const app = express()
app.use(express.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.render('index.ejs')

})
app.post('/weather', (req, res) => {
    const zip = req.body.zip

   const key = process.env.APIKEY
   const url = 'https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}&units=${units}'
   console.log(req.body)
  res.render("weather/show.ejs", {zip})

})

app.listen(3000, () => console.log("we are running on port 3000"))
