const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
app.get('/contact', (req, res) => res.send('Contact me at: victor@hotmail.com'))
app.get('/about', (req, res) => res.send("Hey, it's-a me, Victor"))

app.listen(3000, () => console.log('Listening on port 3000!'))

