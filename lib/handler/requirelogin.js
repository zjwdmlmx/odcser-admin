'use strict'

module.exports = function() {
    return function (req, res, next) {
        if (!req.session || !req.session.uname) {
            res.redirect(`/admin/login?u=${req.url}`)
            return next()
        }
        return next()
    }
}