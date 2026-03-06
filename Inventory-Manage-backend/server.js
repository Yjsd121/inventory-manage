const express = require('express')
const fs = require('fs').promises
const cors = require('cors')
const path = require('path')
const app = express()
const port = 3000

app.use(cors())
app.get('/Orders', async (req, res) => {
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
