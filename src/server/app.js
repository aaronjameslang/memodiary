import express from 'express'

const app = express()

app.use(express.static('static'))
app.use(express.json())

module.exports = app
