const db = require('../data/db-config')

module.exports ={
    find,
    add,
}

function find(){
    return db('tasks')
}

function findById(id){
    return db('tasks').where({id}).first()
}

function add(data){
    return db('tasks')
    .insert(data)
    .then(([id]) => {
        return findById(id)
    })
}