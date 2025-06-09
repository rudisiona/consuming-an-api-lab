const express = require("express")
const https = require('https');
const app = express()
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')

})
app.post('/weather', (req, res) => {
    const zip = req.body.zip
    const apiKey = '27fedef8c659941e7abb8e570e950923'; // 🔑 Replace this with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`;
  
    console.log("Zip", zip);
  
  
})

app.listen(3000, () => console.log("we are running on port 3000"))