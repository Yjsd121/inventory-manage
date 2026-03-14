const express = require('express')
const MySQL = require('mysql2')
const cors = require('cors')

const connection = MySQL.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'yjsd348d',
  database: 'inventory_manage'
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
