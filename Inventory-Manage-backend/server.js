const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req, res) => {
  const method = req.method
  console.log(method)
  if (req.url === '/Search') {
    fs.readFile('img.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        console.log(err)
      } else {
        res.statusCode = 200
        res.setHeader('content-Type', 'Image/png')
        res.end(data)
        console.log('Data enviada')
      }
    })
  }
})

server.listen(3000, () => {
  console.log('Server is launching in http://localhost:3000')
})
