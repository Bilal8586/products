const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const prot = process.env.PORT || 3031


server.use(middlewares)
server.use(router)

server.listen(prot)