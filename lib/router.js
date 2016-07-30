//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

const UserController = require('./controller/usercontroller')

class Router {
  constructor(app) {
    this.app = app
  }

  route() {
    this.app.get("/admin/user/online/count", UserController.getOnlineUserCount)
    this.app.get("/admin/user/count", UserController.getRegistedUserCount)
  }
}

exports.Router = Router
