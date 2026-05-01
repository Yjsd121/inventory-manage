require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.use('/products', require('./routes/products.routes'))
app.use('/orders', require('./routes/orders.routes'))
app.use('/dashboard', require('./routes/dashboard.routes'))
app.use('/kips', require('./routes/kips.routes'))

app.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`)
})
