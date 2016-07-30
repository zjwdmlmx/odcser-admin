//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

const services = require('../services')

class userController {
  constructor() {

  }

  getOnlineUserCount(req, res, next) {
    services.redis.keysAsync('????????????????????????????????????????*').then(data => {
      res.json({req: 0, count: data.length})
      
      return next()
    }).catch(err => {
      res.sendStatus(500)

      return next()
    })
  }

  getRegistedUserCount(req, res, next) {
    new Promise((resolve, reject) => {
      const from = new Date( parseInt(req.query.from) )
      const to   = new Date( parseInt(req.query.to) )

      services.db.query('select count(`id`) as ucount from `users` where `date` between ? and ?',
      [from, to], (err, data) => {
        if (data.length <= 0) return reject()

        return resolve(data[0].ucount)
      })
    }).then(count => {
      res.json({req: 0, count: count})

      return next()
    }).catch(err => {
      console.log(err.stack)
      console.log(err)

      res.sendStatus(500)
      return next()
    })
  }
}

exports = module.exports = new userController()
