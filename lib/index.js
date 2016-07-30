'use strict'

const express   = require('express')
const router    = require('./router')
const program   = require('commander')
const configure = require('./configure')


const app = express()
const R   = new router.Router(app)
R.route()

// configure
program.version(configure.version)
  .option('-P --port [port]', 'the port to bind')
  .option('-A --address [address]', 'the address to bind')
  .parse(process.argv)

let port    = configure.server.port
let address = configure.server.address

if (program.port) {
  port = parseInt(program.port)
}

if (program.address) {
  address = program.address
}

app.listen(port, address, () => {
  console.log(`server listen on ${address}:${port}`)
});
