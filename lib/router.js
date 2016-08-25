//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

const UserController    = require('./controller/usercontroller')
const AppFileController = require('./controller/appfilecontroller')
const LoginController   = require('./controller/logincontroller')
const HomeController    = require('./controller/homecontroller')
const requireLogin      = require('./handler/requirelogin')
const multer            = require('multer')

const upload = multer({dest: '/tmp/'})

class Router {
    constructor(app) {
        this.app = app
    }

    route() {
        this.app.get("/", HomeController.getPage)
        this.app.get("/admin/user/online/count", UserController.getOnlineUserCount)
        this.app.get("/admin/user/count", UserController.getRegistedUserCount)
        this.app.get("/admin/update/app", requireLogin(), AppFileController.getPage)
        this.app.post("/admin/update/app", requireLogin(), upload.single('apk_file'), AppFileController.doUpdateApk)
        this.app.get('/admin/login', LoginController.getPage)
        this.app.post('/admin/login', LoginController.doLogin)
        this.app.get('/admin/logout', LoginController.doLogout)
    }
}

exports.Router = Router
