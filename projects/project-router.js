const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    Projects.add(req.body)
    .then(newProject => {
        res.json(newProject)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id/tasks', (req, res, next) => {
    Projects.findTasks(req.params.id)
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;