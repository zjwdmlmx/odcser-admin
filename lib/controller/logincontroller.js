//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

let uname = "admin"
let passwd = "250412YDL.com"

class LoginController {
    constructor() {

    }

    getPage(req, res, next) {
        res.render('login', {url: req.query.u})
        return next(false)
    }

    doLogin(req, res, next) {
        let url = req.query.u;

        if (req.body.username === uname && req.body.password === passwd) {
            req.session.uname = uname

            res.redirect(url? url: '/admin')
            return next(false)
        }

        res.render('login')
        return next(false);
    }

    doLogout(req, res, next) {
        req.session = null

        res.redirect("/admin/login")
        return next(false)
    }
}

module.exports = new LoginController()
