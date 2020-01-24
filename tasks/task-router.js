const express = require('express')

const Tasks = require('./task-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.find()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    Tasks.add(req.body)
    .then(newTask => {
        res.json(newTask)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;