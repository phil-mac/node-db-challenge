const express = require('express')

const Resources = require('./resource-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.find()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    Resources.add(req.body)
    .then(newResource => {
        res.json(newResource)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;