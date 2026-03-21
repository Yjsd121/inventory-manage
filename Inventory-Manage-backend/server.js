require('dotenv').config()

const express = require('express')
const MySQL = require('mysql2')
const cors = require('cors')

const connection = MySQL.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect(err => {
  if (err) {
    console.log(err)
  } else {
    console.log('MySQL connectión is successfully ')
  }
})
const app = express()

const port = 3000
app.use(cors())

function Querry (sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

// app.get('/test', (req, res) => {

// })

app.get('/Orders', async (req, res) => {
  const rows = await Querry('SELECT * FROM orders')

  res.json({
    products: rows
  })
})

app.get('/Products', async (req, res) => {
  const rows = await Querry('SELECT * FROM products')

  res.json({
    Products: rows
  })
})

app.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`)
})
