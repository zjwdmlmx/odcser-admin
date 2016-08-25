//
// Author: ikether
// Email: zjwdmlmx@126.com
//
// Copyright (c) 2016 by ikether. All Rights Reserved.
//

'use strict'

const fs       = require('fs')
const services = require('../services')

const apk_type = ['c', 'o']
const commonPath = "/srv/www/odcser/static/getapp"

const apk_path = {
    c: `${commonPath}/WeFi_Child.apk`,
    o: `${commonPath}/WeFi_Elder.apk`
}

class appFileController {
    constructor() {

    }

    getPage(req, res, next) {
        let type = req.query['t']
        type = apk_type.find(i => {
            return i === type
        })

        if (type == undefined || type == null) {
            res.render('select_update_type', {isLogin: !!req.session.uname})
            return next(false)
        }

        res.render('update_app',  {appType: type, isLogin: !!req.session.uname})
        return next(false)
    }

    doUpdateApk(req, res, next) {
        console.log(req.session)

        let type = req.query['t']
        if (type == null || type == undefined) {
            res.sendStatus(400)
            return next(false)
        }

        if (req.file && req.file.path) {
            let promise = null;
            if (type === 'c') {
                promise = appFileController.moveFile(req.file.path, apk_path.c)
            } else if (type === 'o') {
                promise = appFileController.moveFile(req.file.path, apk_path.o)
            } else {
                res.sendStatus(400)
                return next(false)
            }

            promise.then(() => {
                res.render('success')
                return next(false)
            }).catch(err => {
                console.log(err)
                res.sendStatus(500)
                return next(false)
            })
            return;
        }

        res.end('Failed to upload apk file, place try again!')
        return next(false)
    }

    static moveFile(from, to) {
        return new Promise((resolve, reject) => {
            let stream = fs.createReadStream(from).pipe(fs.createWriteStream(to));
            stream.on('finish', () => {
                resolve()
            })

            stream.on('error', err => {
                reject(err)
            })
        })
    }
}

module.exports = new appFileController()
