require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const Query = require('./utils/Query')
app.use(cors())

app.get('/Orders', async (req, res) => {
  const rows = await Query('SELECT * FROM orders')
  res.json({
    products: rows
  })
})

app.get('/Products', async (req, res) => {
  const rows = await Query('SELECT * FROM products')

  res.json({
    Products: rows
  })
})

app.get('/Dashboard', async (req, res) => {
  const rows = await Query('SELECT SUM(Quantity) as Total, Category FROM inventory_manage.products GROUP BY Category')
  console.log(rows)
  res.json({
    Products: rows
  })
})

app.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`)
})
