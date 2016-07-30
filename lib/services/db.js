//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//


'use strict'

const mysql     = require('mysql')
const configure = require('../configure')

const db = mysql.createConnection(configure.database)

db.connect()

exports.db = db
