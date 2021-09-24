const express = require("express")
const bodyParser = require("body-parser")



const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.post('/', (req, res) => {

    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let sum = num1 + num2
    res.send("The result of the calculation is: " + sum)
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {

    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let bmi = (weight / (height * height))

    res.send("Your BMI is: " + bmi)
})


app.listen(4000, () => console.log("Listening on port 4000"))