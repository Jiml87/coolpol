const express = require('express')
// const log = require('pino')()
const db = require('./db/database')
const api = require('./routes')

// константы
const port = 8080

const host = '0.0.0.0'

// приложение
const app = express()

app.use('/api', api)

// app.get('/', (req, res) => {
//   res.send('Hello World 2')
// })

app.listen(port, host)
console.log(`running on http://${host}:${port}`)

db
  .authenticate()
  .then(function () {
    console.log('Connection has been established successfully.')
  })
  .catch(function (err) {
    console.log('Unable to connect to the database: ', err)
  })

module.exports = app
