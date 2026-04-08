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

app.get('/Kips/:bd', async (req, res) => {
  const { bd } = req.params

  let table
  let statuses

  if (bd === 'products') {
    table = 'products'
    statuses = ['available', 'low_stock', 'out_stock']
  } else if (bd === 'orders') {
    table = 'orders'
    statuses = ['pending', 'canceled', 'closed']
  } else if (bd === 'dashboard') {
    //
  } else {
    return res.status(400).json({ error: 'bd no válida' })
  }

  try {
    if (bd === 'dashboard') {
      console.log(bd)
      const tproducts = await Query('SELECT count(*) as T_products from inventory_manage.products')
      const tsales = await Query('SELECT count(*) as T_Sales from inventory_manage.orders WHERE Status = \'closed\'')
      const torders = await Query('SELECT count(*) as T_orders from inventory_manage.orders')
      const tpending = await Query('SELECT count(*) as T_sales from inventory_manage.orders WHERE Status = \'pending\'')

      const labels = [
        {
          id: 1,
          name: 'TotalProducts',
          value: tproducts[0]?.T_products || 0
        },
        {
          id: 2,
          name: 'Sales',
          value: tsales[0]?.T_Sales || 0
        },
        {
          id: 3,
          name: 'Orders',
          value: torders[0]?.T_orders || 0
        },
        {
          id: 4,
          name: 'Pending',
          value: tpending[0]?.T_sales || 0
        }
      ]
      return res.json({ labels })
    } else {
      const total = await Query(
        `SELECT count(*) as total FROM inventory_manage.${table}`
      )

      const results = await Promise.all(
        statuses.map(status =>
          Query(
            `SELECT count(*) as total 
            FROM inventory_manage.${table} 
            WHERE Status = '${status}'`
          )
        )
      )

      const labels = [
        {
          id: 1,
          name: `Total ${table}`,
          value: total[0]?.total || 0
        },
        ...statuses.map((status, i) => ({
          id: i + 2,
          name: status,
          value: results[i][0]?.total || 0
        }))
      ]

      res.json({ labels })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error servidor' })
  }
})

app.get('/Products', async (req, res) => {
  const rows = await Query('SELECT * FROM products')

  res.json({
    Products: rows
  })
})

app.get('/dashboard', async (req, res) => {
  const Catp = await Query('SELECT count(*) as Total, Category FROM inventory_manage.products GROUP BY Category')
  const Cato = await Query('SELECT count(*) as Total, Status From inventory_manage.Orders GROUP BY Status')

  res.json({
    P: Catp,
    O: Cato
  })
})

app.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`)
})
