const express = require('express')
const helmet = require('helmet')

const ProjectRouter = require('./projects/project-router')

const server = express()

server.use(helmet())
server.use('/api/projects', ProjectRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.json({message: "ERROR !"})
})

module.exports = server;