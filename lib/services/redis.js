//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

const redis     = require('redis')
const bluebird  = require('bluebird')
const configure = require('../configure')

// promisify the redis connector
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient(configure.redis)

exports.redis = client
