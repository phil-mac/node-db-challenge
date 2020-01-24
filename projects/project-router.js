const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({it: "is working!"})
})

module.exports = router;