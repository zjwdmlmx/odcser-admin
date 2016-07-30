//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

const fs = require('fs')

module.exports = JSON.parse(fs.readFileSync("/etc/odcser-admin.json"))
