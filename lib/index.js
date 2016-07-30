'use strict'

const express = require('express')
const router  = require('./router')

const app = express()
const R   = new router.Router(app)

R.route()
app.listen(9900, () => {
  console.log("server listen on 9900")
});
