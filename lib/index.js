'use strict'

const express       = require('express')
const router        = require('./router')
const program       = require('commander')
const configure     = require('./configure')
const cookieSession = require('cookie-session')
const bodyParser    = require('body-parser')

const app = express()

/*
 * application initial
 */
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))
app.use(cookieSession({keys: ["21ef34Fdfdf2x/?df;23423l;af", "sdfsd234SD//:dsfsdf232fadf"]}))
app.use(bodyParser.urlencoded({extended: false}))

/*
 * router initial
 */
const R = new router.Router(app)
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
