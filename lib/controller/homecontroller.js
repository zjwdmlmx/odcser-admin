//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

class HomeController {
    constructor() {

    }

    getPage(req, res, next) {
        res.render('base', {isLogin: !!req.session.uname})
        return next(false)
    }

}

module.exports = new HomeController()
