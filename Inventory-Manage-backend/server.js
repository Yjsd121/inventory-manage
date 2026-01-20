const http = require('node:http')

const server = http.createServer((req, res) => {
  if (req.url === '/Search') {
    res.statusCode = 200
    console.log('Estamos teniendo conexion perra')
  }
})

server.listen(3000, () => {
  console.log('Server is launching in http://localhost:3000')
})
