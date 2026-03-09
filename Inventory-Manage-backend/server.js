const express = require('express')
const MySQL = require('mysql2')
const fs = require('fs').promises
const cors = require('cors')
const path = require('path')

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

app.get('/test', (req, res) => {
  connection.query('SELECT * FROM  products', (err, rows, fields) => {
    if (err) throw err
    console.log('the solution is: ', rows[0].solutions)
  })

  connection.end()
})
app.get('/Orders', async (req, res) => {
  try {
    const filepath = path.join(__dirname, 'Data', 'Orders.json')
    const data = await fs.readFile(filepath, 'utf-8')
    res.json(JSON.parse(data))
    console.log('Dataenviada')
  } catch (e) {
    console.log(`Este es el error ${e}`)
  }
})
app.get('/Products', async (req, res) => {
  try {
    const filepath = path.join(__dirname, 'Data', 'Elementos.json')
    const data = await fs.readFile(filepath, 'utf-8')
    res.json(JSON.parse(data))
    console.log('Dataenviada')
  } catch (e) {
    console.log(`Este es el error ${e}`)
  }
})

app.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`)
})
